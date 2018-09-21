import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo'

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress(txt) {
    this.props.navigation.navigate(txt)
  }

  render() {

    let navbarSettings

    if(this.props.navigation.state.index === 0) {
      navbarSettings = {
        text: "Balance: 6740 kr"
      }
    } else {
      navbarSettings= {
        text: "William Danielsson"
      }
    }

    return (
      <LinearGradient
        style={styles.navbarContainer}
        colors={['#F58249', '#FD5C3C']}
        start={[0, 0]}
        end={[1, 0]}>
        {this.props.navigation.state.index === 1 && 
          <TouchableOpacity
            style={[styles.item, styles.floatLeft]}
            onPress={() => this.props.navigation.goBack(null)}
            >
            <Ionicons name="ios-arrow-back" size={28} color="#fff" />
          </TouchableOpacity>
        }
        {this.props.navigation.state.index === 0 && 
          <View style={styles.item}></View>
        }
        <View style={[styles.item, styles.balanceContainer]}>
          <Text style={styles.balanceText}>{navbarSettings.text}</Text>
        </View>
        {this.props.navigation.state.index === 0 && 
          <TouchableOpacity
            style={[styles.item, styles.floatRight]}
            onPress={() => this.onPress('Bets')}
            >
            <Entypo name="dots-three-vertical" size={28} color="#fff" />
          </TouchableOpacity>
        }
        {this.props.navigation.state.index === 1 && 
          <View style={styles.item}></View>
        }
      </LinearGradient>
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
    backgroundColor: 'red'
  },
  item: {
    flex: 1,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  floatLeft: {
    alignItems: 'flex-start',
    marginLeft: 8
  },
  balanceContainer: {
    alignItems: 'center',
    flex: 3
  },
  balanceText: {
    fontSize: 16,
    color: "#fff"
  },
  floatRight: {
    alignItems: 'flex-end'
  }
});