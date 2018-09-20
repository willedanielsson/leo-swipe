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
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    backgroundColor: "#fd5c3c"
  },
  teamText: {
    textAlign: "center",
    fontSize: 26,
    color: "#fff"
  },
  vsText: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff"
  }
});

TeamContainer.propTypes = {
  card: PropTypes.object
};