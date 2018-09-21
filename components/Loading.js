
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { Bubbles } from 'react-native-loader';

export default class Loading extends React.Component {
  render() {

    return (
      <TouchableOpacity
        onPress={this.props.click}
        style={styles.container}
      >
        <Image style={styles.image} source={require('../media/logo.png')} />
        <Bubbles size={10} color="rgba(255, 255, 255, 0.87)" />
      </TouchableOpacity>
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
  }
});