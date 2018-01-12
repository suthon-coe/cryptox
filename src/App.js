import React, { Component } from 'react';
import Ticker from './Ticker'
import axios from 'axios'
import _ from 'lodash'

class App extends Component {
  SYMBOLS = ['OMG', 'BTC', 'XRP']

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    let self = this
    axios.get('https://api.coinmarketcap.com/v1/ticker/?convert=THB')
    .then(function (response) {
      let price_state = {}
      _.each(self.SYMBOLS, symbol => {
        price_state[symbol] = _.find(response.data, ['symbol', symbol]).price_thb
      })
      self.setState(price_state)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        {
          _.map(this.SYMBOLS, symbol => <Ticker symbol={symbol} price={this.state[symbol]}/>)
        }
      </div>
    );
  }
}

export default App;
