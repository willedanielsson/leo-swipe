import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native'

export default class TeamContainer extends React.Component {
  render() {
    const { card } = this.props 
    return (
      <View style={styles.teamsContainer}>
        <Text style={styles.teamText}>{card.home}</Text>
        <Text style={styles.vsText}>vs</Text>
        <Text style={styles.teamText}>{card.away}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  teamsContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: "center"
  },
  teamText: {
    textAlign: "center",
    fontSize: 25
  },
  vsText: {
    textAlign: "center",
    fontSize: 18
  }
});

TeamContainer.propTypes = {
  card: PropTypes.object
};