
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BetsItem from '../components/BetsItem'
import { betHistoryData } from '../mockData/bets'

export default class BetScreen extends React.Component {

  renderMyItem = (item) => {
    return (
      <BetsItem bet={item} />
    )
  };
  render() {
    return (
        <View style={styles.container}>
          <FlatList
            data={betHistoryData}
            renderItem={({item, key}) => this.renderMyItem(item, key) }
            keyExtractor={(item, index) => index.toString()}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f7f7f7'
  }
})
