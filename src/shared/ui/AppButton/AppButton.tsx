import cls from "./AppButton.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { type ButtonHTMLAttributes, type FC } from "react";

export enum ThemeButton {
  OUTLINE = "outline",
  CLEAR = "clear",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.AppButton, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
