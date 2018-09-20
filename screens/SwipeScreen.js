import React from 'react';
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, Text, View, Button } from 'react-native'
import Card from '../components/Card'
import DATA from '../mockData/bets'

export default class SwipeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: DATA,
      cardIndex: 0
    }
  }

  renderCard = (card, index) => {
    return <Card card={card} index={index}/>
  };

  onSwipe = () => {
    this.setState({ cardIndex: this.state.cardIndex + 1 })
  }


  onSwipeAll = () => {
    console.log('onSwipedAll')
  }

  render() {
    return (
      <View style={styles.container}>
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
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});