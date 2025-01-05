import cls from "./AppButton.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo, type ReactNode, type ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
  OUTLINE = "outline",
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const AppButton = memo((props: AppButtonProps) => {
  const {
    className,
    children,
    theme,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls[size]]: true,
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.AppButton, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
