import React from 'react';
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, View } from 'react-native'
import Card from '../components/Cards'
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
            marginBottom={100}
            infinite={true}
            overlayLabels={labelConfig}
            >
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  }
});


const labelConfig = {
  left: {
    title: 'NOPE',
    style: {
      label: {
        backgroundColor: '#e60000',
        color: 'white'
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: -30
      }
    }
  },
  right: {
    title: 'BET',
    style: {
      label: {
        backgroundColor: '#1daa63',
        color: 'white'
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: 30
      }
    }
  },
  top: {
    title: 'COMBO',
    style: {
      label: {
        backgroundColor: '#fcbe31',
        color: 'white'
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
  }
}
