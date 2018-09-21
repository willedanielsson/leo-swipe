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
        name: 'adjust',
        color: '#0084b4',
        label: 'Upcoming'
      }
    } else if(bet.status === 'win') {
      iconConfig = {
        name: 'trophy',
        color: '#1daa63',
        label: 'Win'
      }
    } else {
      iconConfig = {
        name: 'times',
        color: '#e60000',
        label: 'Loss'
      }
    }

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => console.log('Click')}
      >
        <View style={styles.leftWrapper}>
          <Text style={styles.date}>{bet.date}</Text>
          <Text style={styles.item}>{bet.game}</Text>
        </View>
        <View style={styles.rightWrapper}>
          <FontAwesome name={iconConfig.name} size={50} color={iconConfig.color} />
          <Text style={styles.statusText}>{iconConfig.label}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    // borderWidth: 1,
    // borderColor: "rgba(0, 0, 0, 0.12)",
    margin: 5,
    padding: 5,
    elevation: 5
   },
   date: {
    color: "rgba(0, 0, 0, 0.54)"
   },
   leftWrapper: {
     flex: 3,
     padding: 10
   },
   item: {
     fontSize: 22
   },
   rightWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
   },
   statusText: {
    fontSize: 14
   }
});

BetsItem.propTypes = {
  bet: PropTypes.object
};