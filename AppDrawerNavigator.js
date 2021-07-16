import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import AskUsScreen from '../screens/askus';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import LearnFromUsScreen from '../screens/LearnFromUs';

import { Icon } from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
      navigationOptions: {
        drawerIcon: <Icon name="home" type="fontawesome" />,
      },
    },
    AskUs: {
      screen: AskUsScreen,
      navigationOptions: {
        drawerIcon: <Icon name="question mark" type="font-awesome" />,
        drawerLabel: 'Ask Us',
      },
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        drawerIcon: <Icon name="bell" type="font-awesome" />,
        drawerLabel: 'Notifications',
      },
    },
    LearnFromUs: {
      screen: LearnFromUsScreen,
      navigationOptions: {
        drawerIcon: <Icon name="gift" type="font-awesome" />,
        drawerLabel: 'Learn From Us',
      },
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        drawerIcon: <Icon name="settings" type="fontawesome5" />,
        drawerLabel: 'My Profile',
      },
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);
