import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class Navbar extends React.Component {

  render() {
    return (
      <View style={styles.navbarContainer}>
        <View style={styles.item}>
          <Ionicons name="md-settings" size={32} color="white" />
        </View>
        <View style={[styles.item, styles.logoContainer]}>
          <Text style={styles.logoText}>LeoSwipe</Text>
        </View>
        <View style={[styles.item, styles.floatRight]}>
          <Ionicons name="md-ionic" size={32} color="white" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fd5c3c'
  },
  item: {
    flex: 1
  },
  logoContainer: {
    alignItems: 'center',
    flex: 3
  },
  logoText: {
    fontSize: 20
  },
  floatRight: {
    alignItems: 'flex-end'
  }
});