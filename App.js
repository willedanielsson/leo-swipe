import React from 'react';
import SwipeScreen from './screens/SwipeScreen'
import BetScreen from './screens/BetScreen'
import SettingsScreen from './screens/SettingsScreen'
import Navbar from './components/Navbar'

import { createMaterialTopTabNavigator } from 'react-navigation';

export default createMaterialTopTabNavigator(
  {
    Bets: {
      screen: BetScreen,
      navigationOptions: () => ({
				tabBarLabel: "Bets"
			})
    },
    Swipe: {
      screen: SwipeScreen,
      navigationOptions: () => ({
				tabBarLabel: "Swipe"
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