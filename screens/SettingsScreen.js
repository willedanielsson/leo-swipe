
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import BetSettings from '../components/Settings/BetSettings'

export default class SettingsScreen extends React.Component {

  onLogout = () => {
    console.log('Log out')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>William Danielsson</Text>
        <Text style={styles.balance}>Balans: 6430 kr</Text>
        <BetSettings />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onLogout}
            title="Log out"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f7f7f7'
  },
  name: {
    fontSize: 25,
  },
  balance: {
    fontSize: 15,
    marginLeft: 10
  },
  buttonContainer: {
    marginTop: 100
  }
});