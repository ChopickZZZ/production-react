import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import { memo, useState } from "react";
import { LangSwitcher } from "shared/ui/LangSwitcher/ui/LangSwitcher";
import { AppButton, ButtonSize, ButtonTheme } from "shared/ui/AppButton/AppButton";
import { SidebarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
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
        {SidebarItemsList.map((item) => {
          return <SidebarItem key={item.path} item={item} collapsed={collapsed} />;
        })}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </aside>
  );
});
