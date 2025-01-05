import cls from "./ThemeSwitcher.module.scss";
import { memo } from "react";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppButton, ButtonTheme } from "shared/ui/AppButton/AppButton";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </AppButton>
  );
});
