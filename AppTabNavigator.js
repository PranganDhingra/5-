import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator';
import AboutUs from '../screens/aboutus';
import LearnFromUs from '../screens/LearnFromUs';
import ContactUs from '../screens/ContactUs';
import AskUs from '../screens/askus';

export const AppTabNavigator = createBottomTabNavigator({
  AskUS: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/askus.png')}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: 'Ask Us',
    },
  },

  LearnFromUS: {
    screen: LearnFromUs,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/learnfromus.png')}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: 'Learn From Us',
    },
  },

  ContactUS: {
    screen: ContactUs,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/contactus.png')}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: 'Contact Us',
    },
  },

  AboutUS: {
    screen: AboutUs,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/aboutus.png')}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: 'About Us',
    },
  },
});
