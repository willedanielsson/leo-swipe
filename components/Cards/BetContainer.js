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
  },
  outcomeText: {
    textAlign: "center",
    fontSize: 22
  },
  oddsText: {
    textAlign: "center",
    fontSize: 28
  }
});

BetContainer.propTypes = {
  card: PropTypes.object
};