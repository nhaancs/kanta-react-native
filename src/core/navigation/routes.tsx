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
import { SignIn2Container } from '../../containers/signIn2/signIn2.container';
import { ProfileSettings1Container } from '../../containers/profileSettings1/profileSettings1.container';
import { Trainings1Container } from '../../containers/trainings1/trainings1.container';
import {MenuContainer} from '@src/containers/menu';
import { HomeContainer } from '../../containers/home/home.container';
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
  ['CategoryScreen']: Trainings1Container,
  ['SearchScreen']: ProfileSettings1Container,
  ['ProfileScreen']: SignIn2Container,
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
