import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { AppButton, ThemeButton } from "shared/ui/AppButton/AppButton";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <AppButton
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t("Язык")}
    </AppButton>
  );
};
