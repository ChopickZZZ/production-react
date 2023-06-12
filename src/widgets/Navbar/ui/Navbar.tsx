import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/'}
          className={cls.mainLink}
        >
          Домой
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/about'}
          className={cls.aboutLink}
        >
          ABOUT
        </AppLink>
      </div>
    </div>
  )
}
