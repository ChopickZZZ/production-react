import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { AppButton, ButtonTheme } from "shared/ui/AppButton/AppButton";
import { useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData/getUserAuthData";
import { userActions } from "entities/User";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <AppButton
          className={classNames(cls.links)}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onLogout}
        >
          {t("Выйти")}
        </AppButton>
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppButton
        className={classNames(cls.links)}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onShowModal}
      >
        {t("Войти")}
      </AppButton>

      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </div>
  );
};
