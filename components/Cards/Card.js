import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native'
import TeamContainer from './TeamContainer';
import BetContainer from './BetContainer';

export default class Card extends React.Component {
  render() {
    const { card } = this.props 
    return (
      <View style={styles.card}>
        <TeamContainer card={card} />
        <BetContainer card={card} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.12)",
    backgroundColor: "white",
    flexDirection: 'column',
    padding: 20
  }
});

Card.propTypes = {
  card: PropTypes.object
};