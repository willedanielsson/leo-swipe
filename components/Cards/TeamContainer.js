import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native'

export default class TeamContainer extends React.Component {
  render() {
    const { card } = this.props 
    return (
      <View style={styles.teamsContainer}>
        <Text style={styles.teamText}>{card.home} - {card.away}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  teamsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  teamText: {
    fontSize: 20,
    textAlign: 'center'
  }
});

TeamContainer.propTypes = {
  card: PropTypes.object
};