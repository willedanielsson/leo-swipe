import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native'

export default class TeamContainer extends React.Component {
  render() {
    const { card } = this.props 
    return (
      <View style={styles.teamsContainer}>
        <Text style={styles.teamText}>{card.home} - {card.away}</Text>
        <Text style={styles.dateText}>{card.date}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  teamsContainer: {
    flex: 1
  },
  teamText: {
    fontSize: 20,
    textAlign: 'center'
  },
  dateText: {
    fontSize: 14,
    textAlign: 'center',
    color: "rgba(0, 0, 0, 0.54)"
  }
});

TeamContainer.propTypes = {
  card: PropTypes.object
};