
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import BetSettings from '../components/Settings/BetSettings'

export default class Settings extends React.Component {

  onLogout = () => {
    console.log('Log out')
  }

  render() {

    return (
      <View style={styles.container}>
        <BetSettings />
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
  },
  name: {
    fontSize: 25,
    textAlign: 'center'
  },
  balance: {
    fontSize: 15,
    marginLeft: 10
  }
});