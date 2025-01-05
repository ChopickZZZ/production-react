import { routePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: routePath.main,
    text: "Главная",
    Icon: MainIcon,
  },
  {
    path: routePath.about,
    text: "О нас",
    Icon: AboutIcon,
  },
  {
    path: routePath.profile,
    text: "Профиль",
    Icon: ProfileIcon,
  },
];
