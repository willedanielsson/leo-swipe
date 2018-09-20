import React from 'react';
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, View } from 'react-native'
import Card from '../components/Cards'
import { DATA } from '../mockData/bets'
import { FontAwesome } from '@expo/vector-icons';

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
    element: <FontAwesome name="times-circle" size={50} color="#e60000" />,
    title: 'NOPE',
    style: {
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
    element: <FontAwesome name="check-circle" size={50} color="#1daa63" />,
    title: 'BET',
    style: {
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
        backgroundColor: '#0084b4',
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
