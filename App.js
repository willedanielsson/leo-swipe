
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SwipeView from './components/SwipeView'
import Navbar from './components/Navbar'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.navbar}>
          <Text>Hello</Text>
        </View> */}
        <View style={styles.swipe}>
          <SwipeView />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  swipe: {
    flex: 1,
    backgroundColor: 'blue'
  }
});