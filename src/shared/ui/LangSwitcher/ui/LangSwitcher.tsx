import cls from "./LangSwitcher.module.scss";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { AppButton, ButtonTheme } from "shared/ui/AppButton/AppButton";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <AppButton
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t(short ? "Короткий язык" : "Язык")}
    </AppButton>
  );
});
