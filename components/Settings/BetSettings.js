import React from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native'

export default class BetSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100
    }
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  render() {
    return (
      <View style={styles.betAmountSetting}>
        <Text>Bet amount: {this.state.value}</Text>
        <Slider
          step={10}
          maximumValue={1000}
          onValueChange={this.change.bind(this)}
          value={this.state.value}
        />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  betAmountSetting: {
    marginTop: 20,
    padding: 20,
    borderRadius: 4,
    backgroundColor: '#fff'
  }
});