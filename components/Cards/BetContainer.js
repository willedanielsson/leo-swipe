import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native'

export default class BetContainer extends React.Component {
  render() {
    const { card } = this.props 

    let outcomeText = ''
    if(card.outcome === 'home') {
      outcomeText = `${card.home} wins`
    } else if(card.outcome === 'away') {
      outcomeText = `${card.away} wins`
    } else {
      outcomeText = "Draw"
    }

    return (
      <View style={styles.betContainer}>
        <Text style={styles.outcomeText}>{outcomeText}</Text>
        <Text style={styles.oddsText}>{card.odds}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  betContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10
  },
  outcomeText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 'bold'
  },
  oddsText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold'
  }
});

BetContainer.propTypes = {
  card: PropTypes.object
};