import {
  ImageStyle,
  StyleProp,
} from 'react-native';
import {
  MenuIconAuth,
  MenuIconDashboards,
  MenuIconEcommerce,
  MenuIconSocial,
  MenuIconAuthDark,
  MenuIconSocialDark,
  MenuIconDashboardsDark,
  MenuIconEcommerceDark,
} from '@src/assets/icons';
import {
  ThemeKey,
  ThemeService,
} from '@src/core/themes';
import { LayoutsContainerData } from './type';

export const routes: LayoutsContainerData[] = [
  {
    title: 'Auth',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconAuth(style),
        'Eva Dark': MenuIconAuthDark(style),
      }, theme);
    },
    route: 'Auth',
  },
  {
    title: 'Social',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconSocial(style),
        'Eva Dark': MenuIconSocialDark(style),
      }, theme);
    },
    route: 'Social',
  },
  {
    title: 'Dashboards',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconDashboards(style),
        'Eva Dark': MenuIconDashboardsDark(style),
      }, theme);
    },
    route: 'Dashboards',
  },
  {
    title: 'Ecommerce',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconEcommerce(style),
        'Eva Dark': MenuIconEcommerceDark(style),
      }, theme);
    },
    route: 'Ecommerce',
  },
];
