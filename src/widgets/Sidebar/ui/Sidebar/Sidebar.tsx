import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { LangSwitcher } from "shared/ui/LangSwitcher/ui/LangSwitcher";

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
      <button data-testid="sidebar-toggle" onClick={onToggle}>
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};
