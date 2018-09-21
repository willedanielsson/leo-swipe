import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default class BetsItem extends React.Component {
  render() {
    const { bet } = this.props
    
    let iconConfig

    if(bet.status === 'upcoming') {
      iconConfig = {
        color: '#FCBE31',
        label: 'Open'
      }
    } else if(bet.status === 'win') {
      iconConfig = {
        color: '#1daa63',
        label: 'Win'
      }
    } else {
      iconConfig = {
        color: '#e60000',
        label: 'Loss'
      }
    }

    return (
      <View style={styles.container}>
        <View style={[styles.topLine, {backgroundColor: iconConfig.color}]}></View>
        <View style={styles.wrapper}>
          <View style={styles.topWrapper}>
            <Text style={styles.amount}>{bet.amount} kr</Text>
            <Text style={styles.amount}>{iconConfig.label}</Text>
          </View>
          <Text style={styles.bet}>{bet.bet}</Text>
          <Text style={styles.odds}>{bet.odds}</Text>
          <Text style={styles.date}>{bet.date}</Text>
          <Text style={styles.game}>{bet.game}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    margin: 5,
    elevation: 2,
    backgroundColor: '#fff'
  },
  wrapper: {
    flexDirection: 'column',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
   },
   topLine: {
     height: 5,
     borderTopLeftRadius: 4,
     borderTopRightRadius: 4,
    //  backgroundColor: '#FCBE31'
   },
   topWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14
  },
  amount: {
   fontSize: 16
  },
  bet: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
    odds: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24
  },
  date: {
    textAlign: 'center',
    color: "rgba(0, 0, 0, 0.54)"
  },
  game: {
    textAlign: 'center',
    color: "rgba(0, 0, 0, 0.54)"
  },
});

BetsItem.propTypes = {
  bet: PropTypes.object
};