import React, { Component } from 'react';


class Ticker extends Component {
  render() {
    return (
      <div>
        {this.props.symbol} : {this.props.price}
      </div>
    );
  }
}

export default Ticker;
