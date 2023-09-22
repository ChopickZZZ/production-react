import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { LangSwitcher } from "shared/ui/LangSwitcher/ui/LangSwitcher";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { routePath } from "shared/config/routeConfig/routeConfig";
import {
  AppButton,
  ButtonSize,
  ButtonTheme,
} from "shared/ui/AppButton/AppButton";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <AppButton
        className={cls.collapseBtn}
        data-testid="sidebar-toggle"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
        onClick={onToggle}
      >
        {collapsed ? ">" : "<"}
      </AppButton>
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={routePath.main}
          className={cls.mainLink}
        >
          Домой
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={routePath.about}
          className={cls.aboutLink}
        >
          About us
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </aside>
  );
};
