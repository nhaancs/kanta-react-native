import { useScreens } from 'react-native-screens';
import {
  createAppContainer,
  NavigationContainer,
  NavigationRouteConfigMap,
} from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackProp,
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  LayoutsContainer,
  MenuContainer,
} from '@src/containers/menu';
import {
  AuthContainer,
  SignIn2Container,
} from '@src/containers/layouts/auth';
import {
  DashboardsContainer,
  Trainings1Container,
} from '@src/containers/layouts/dashboards';
import {
  EcommerceContainer,
  ProductDetailsContainer,
  ProductsListContainer,
} from '@src/containers/layouts/ecommerce';

import {
  Profile6Container,
  ProfileSettings1Container,
  SocialContainer,
} from '@src/containers/layouts/social';

import {
  DashboardNavigationOptions,
  EcommerceNavigationOptions,
  MenuNavigationOptions,
  SocialNavigationOptions,
} from './options';

const EcommerceNavigationMap: NavigationRouteConfigMap<any, NavigationStackProp> = {
  ['Products List']: {
    screen: ProductsListContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Product Details']: {
    screen: ProductDetailsContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
};

const DashboardsNavigationMap: NavigationRouteConfigMap<any, NavigationStackProp> = {
  ['Trainings 1']: {
    screen: Trainings1Container,
    navigationOptions: DashboardNavigationOptions,
  },
};

const SocialNavigationMap: NavigationRouteConfigMap<any, NavigationStackProp> = {
  ['Profile 6']: {
    screen: Profile6Container,
    navigationOptions: SocialNavigationOptions,
  },
  ['Profile Settings 1']: {
    screen: ProfileSettings1Container,
    navigationOptions: SocialNavigationOptions,
  },
};

const AuthNavigationMap: NavigationRouteConfigMap<any, NavigationStackProp> = {
  ['Sign In 2']: SignIn2Container,
};

const LayoutsNavigator: NavigationContainer = createStackNavigator(
  {
    ['Layouts']: LayoutsContainer,
    ['Auth']: AuthContainer,
    ['Social']: SocialContainer,
    ['Dashboards']: DashboardsContainer,
    ['Ecommerce']: EcommerceContainer,
  },
  {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

const MenuNavigator = createBottomTabNavigator({
  ['Home']: LayoutsNavigator,
  ['Category']: LayoutsNavigator,
  ['Search']: LayoutsNavigator,
  ['Profile']: LayoutsNavigator,
}, {
  tabBarComponent: MenuContainer,
});

const AppNavigator: NavigationContainer = createStackNavigator({
  ['Home']: MenuNavigator,
  ...AuthNavigationMap,
  ...SocialNavigationMap,
  ...DashboardsNavigationMap,
  ...EcommerceNavigationMap,
}, {
  headerMode: 'screen',
  defaultNavigationOptions: {
    header: null,
  },
});

const createAppRouter = (container: NavigationContainer): NavigationContainer => {
  useScreens();
  return createAppContainer(container);
};


export const Router: NavigationContainer = createAppRouter(AppNavigator);
