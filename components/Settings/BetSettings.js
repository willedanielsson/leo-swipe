import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default class BetSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '50' };
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
        <View style={styles.myStake}>
          <Text style={styles.text}>My stake</Text>
          <TextInput
            style={{height: 40, width: 60, marginLeft: 8}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            keyboardType = 'numeric'
          />
        </View>
        <View style={styles.balance}>
         <Text style={styles.text}>Balance</Text>
         <Text  style={styles.balanceText}>6740 kr</Text>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  betAmountSetting: {
    flex: 1,
    flexDirection: 'row'
  },
  myStake: {
    flex: 1
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
    marginRight: 8
  },
  balance: {
    flex: 1,
    alignItems: 'flex-end'
  },
  balanceText: {
    marginRight: 8
  }
});