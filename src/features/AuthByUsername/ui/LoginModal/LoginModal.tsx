import cls from "./LoginModal.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Suspense } from "react";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Modal } from "shared/ui/Modal/Modal";
import { AppLoader } from "shared/ui/AppLoader/AppLoader";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<AppLoader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
