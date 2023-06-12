import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Theme } from "app/providers/ThemeProvider";
import { AppButton, ThemeButton } from "shared/ui/AppButton/AppButton";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </AppButton>
  );
};
