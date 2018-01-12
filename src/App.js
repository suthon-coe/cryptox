import React, { Component } from 'react';
import Ticker from './Ticker'
import axios from 'axios'
import _ from 'lodash'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    let self = this
    axios.get('https://api.coinmarketcap.com/v1/ticker/?convert=THB')
    .then(function (response) {
      let item = _.find(response.data, ['symbol', 'BTC'])
      console.log(item.symbol, ":", item.price_thb)
      self.setState({BTC: item.price_thb})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Ticker symbol="BTC" price={this.state.BTC}/>
      </div>
    );
  }
}

export default App;
