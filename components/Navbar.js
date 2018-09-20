import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress(txt) {
    if(txt) {
      this.props.navigation.navigate(txt)
    }
  }

  render() {

    return (
      <View style={styles.navbarContainer}>
        <TouchableOpacity
          style={[styles.item, styles.floatLeft]}
          onPress={() => this.onPress('Settings')}
        >
          <Ionicons name="md-settings" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.item, styles.logoContainer]}
          onPress={() => this.onPress('Swipe')}  
        >
          <Text style={styles.logoText}>LeoSwipe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.item, styles.floatRight]}
          onPress={() => this.onPress('Bets')}
          >
          <FontAwesome name="archive" size={28} color="#fff" />
        </TouchableOpacity>
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
    flex: 1,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  floatLeft: {
    alignItems: 'flex-start'
  },
  logoContainer: {
    alignItems: 'center',
    flex: 3
  },
  logoText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#fff"
  },
  floatRight: {
    alignItems: 'flex-end'
  }
});