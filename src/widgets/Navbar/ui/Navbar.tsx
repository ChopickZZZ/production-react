import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { AppButton, ButtonTheme } from "shared/ui/AppButton/AppButton";
import { useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppButton
        className={classNames(cls.links)}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onShowModal}
      >
        {t("Войти")}
      </AppButton>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
