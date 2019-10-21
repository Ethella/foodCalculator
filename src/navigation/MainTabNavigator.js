import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import FoodSearchScreen from '../screens/FoodTab/FoodSearchScreen/FoodSearchScreen';
import FoodDetailScreen from '../screens/FoodTab/FoodDetailScreen/FoodDetailScreen';
import MainScreen from '../screens/MainTab/MainScreen/MainScreen';
import SettingsScreen from '../screens/SettingsTab/SettingsScreen/SettingsScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: MainScreen,

  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: () => {},
};

HomeStack.path = '';

const FoodStack = createStackNavigator(
  {
      Food: FoodSearchScreen,
      Detail: FoodDetailScreen
  },
  config
);

FoodStack.navigationOptions = {
  tabBarLabel: 'Food',
  tabBarIcon: () => {}
};

FoodStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: () => {}
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    FoodStack,
    SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
