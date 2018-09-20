import React from 'react';
import SwipeScreen from './screens/SwipeScreen'
import BetScreen from './screens/BetScreen'
import SettingsScreen from './screens/SettingsScreen'
import Navbar from './components/Navbar'

import { createMaterialTopTabNavigator } from 'react-navigation';

export default createMaterialTopTabNavigator(
  {
    Swipe: {
      screen: SwipeScreen,
      navigationOptions: () => ({
				tabBarLabel: "Swipe"
			})
    },
    Bets: {
      screen: BetScreen,
      navigationOptions: () => ({
				tabBarLabel: "Bets"
			})
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
				tabBarLabel: "Settings"
			})
    }
  },
  {
    swipeEnabled: false,
    tabBarComponent: Navbar
  }
);