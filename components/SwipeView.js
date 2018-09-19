import React from 'react';
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, Text, View, Button } from 'react-native'
import Navbar from './Navbar'

export default class SwipeView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: ['TEST', 'MORE', 'TEST', 'WHAT', 'EVEN', 'MORE', 'TEST'],
      cardIndex: 0
    }
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{card} - {index}</Text>
      </View>
    )
  };

  onSwipe = () => {
    console.log('Swiped on ', this.state.cardIndex)
    this.setState({ cardIndex: this.state.cardIndex + 1 })
  }


  onSwipeAll = () => {
    console.log('onSwipedAll')
  }

  render() {
    return (
      <Swiper
          cards={this.state.cards}
          renderCard={this.renderCard}
          onSwiped={this.onSwipe}
          onSwipedAll={this.onSwipeAll}
          cardIndex={this.state.cardIndex}
          backgroundColor={'#f7f7f7'}
          stackSize={3}
          cardVerticalMargin={100}
          >
          <Navbar />
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});