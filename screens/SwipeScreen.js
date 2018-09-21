import React from 'react';
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, View, Text, Image } from 'react-native'
import Card from '../components/Cards'
import { DATA } from '../mockData/bets'
import { FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo'
import Loading from '../components/Loading';

export default class SwipeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: DATA,
      cardIndex: 0,
      isLoading: true
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

  componentDidMount() {
    setTimeout(()=> { 
      this.setState({
        isLoading: false
      })
    }, 3000);
  }

  render() {
    return (
      <LinearGradient
        style={styles.container}
        colors={['#F58249', '#FD5C3C']}
        start={[0, 0]}
        end={[1, 0]}>
        {this.state.isLoading &&
          <Loading />
        }
        {!this.state.isLoading && 
          <Swiper
              cards={this.state.cards}
              renderCard={this.renderCard}
              onSwiped={this.onSwipe}
              onSwipedAll={this.onSwipeAll}
              cardIndex={this.state.cardIndex}
              backgroundColor={'transparent'}
              stackSize={3}
              cardVerticalMargin={100}
              marginBottom={50}
              infinite={true}
              overlayLabels={labelConfig}
              overlayOpacityHorizontalThreshold={10}
              >
          </Swiper>
        }
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    borderWidth: 0,
    borderRadius: 10,
    marginTop: 15
  },
  bet: {
    marginLeft: 10,
    backgroundColor: 'green',
    transform: [{ rotate: '-15deg'}]
  },
  nope: {
    marginRight: 10,
    backgroundColor: 'red',
    transform: [{ rotate: '15deg'}]
  },
  double: {
    backgroundColor: 'blue'
  }
});


const labelConfig = {
  left: {
    element: <Text style={[styles.text, styles.nope]}>NOPE</Text>,
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
    element: <Text style={[styles.text, styles.bet]}>BET</Text>,
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
    lement: <Text style={[styles.text, styles.double]}>DOUBLE</Text>,
    title: 'COMBO',
    style: {
      wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
  }
}
