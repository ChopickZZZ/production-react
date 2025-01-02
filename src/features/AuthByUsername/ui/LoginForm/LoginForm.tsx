import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { AppButton, ButtonTheme } from "shared/ui/AppButton/AppButton";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {
  DynamicModuleLoader,
  type ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t("Форма авторизации")} />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
          value={username}
          className={cls.input}
          autofocus
          placeholder={t("Введите логин")}
          onChange={onChangeUsername}
        />
        <Input
          value={password}
          className={cls.input}
          placeholder={t("Введите пароль")}
          onChange={onChangePassword}
        />
        <AppButton
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          disabled={isLoading}
          onClick={onLoginClick}
        >
          {t("Войти")}
        </AppButton>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
