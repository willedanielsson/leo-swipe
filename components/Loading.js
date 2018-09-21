
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from 'react-native'

export default class Loading extends React.Component {
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
      <View style={styles.container}>
        <Image style={styles.image} source={require('../media/logo.png')} />
        <Text style={styles.text}>My stake</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          underlineColorAndroid="white"
          keyboardType = 'numeric'
        />
          <TouchableOpacity onPress={this.props.click} style={styles.touchWrapper}>
            <Text style={styles.buttonText}>
              START
            </Text>
          </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginBottom: 40
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  input: {
    height: 40,
    width: 45,
    paddingLeft: 8,
    color: "white",
    fontSize: 20
  },
  touchWrapper: {
    backgroundColor: 'white',
    borderRadius: 6
  },
  buttonText: {
    color: 'red',
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold'
  }
});