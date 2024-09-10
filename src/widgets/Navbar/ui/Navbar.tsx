import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { AppButton, ButtonTheme } from "shared/ui/AppButton/AppButton";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppButton
        className={classNames(cls.links)}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        {t("Войти")}
      </AppButton>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Voiti
      </Modal>
    </div>
  );
};
