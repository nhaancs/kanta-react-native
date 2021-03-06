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
import { ProductDetailsContainer } from '../../containers/productDetails/productDetails.container';
import {MenuContainer} from '@src/containers/menu';
import { HomeContainer } from '../../containers/home/home.container';
import { ProfileContainer } from '../../containers/profile/profile.container';
import {
  DashboardNavigationOptions,
  EcommerceNavigationOptions,
} from './options';

// const DashboardsNavigationMap: NavigationRouteConfigMap<any, NavigationStackProp> = {
//   ['Trainings 1']: {
//     screen: Trainings1Container,
//     navigationOptions: DashboardNavigationOptions,
//   },
// };

const ProductNavigationMap: NavigationRouteConfigMap<any, NavigationStackProp> = {
  ['ProductDetail']: {
    screen: ProductDetailsContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
};

// const HomeNavigator: NavigationContainer = createStackNavigator(
//   {
//     ['Layouts']: LayoutsContainer,
//     ['Auth']: AuthContainer,
//     ['Social']: SocialContainer,
//     ['Dashboards']: DashboardsContainer,
//   },
//   {
//     defaultNavigationOptions: MenuNavigationOptions,
//   },
// );

const MenuNavigator = createBottomTabNavigator({
  ['HomeScreen']: HomeContainer,
  ['ProfileScreen']: ProfileContainer,
}, {
  tabBarComponent: MenuContainer,
});

const AppNavigator: NavigationContainer = createStackNavigator({
  ['Home']: MenuNavigator,
  ...ProductNavigationMap,
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
