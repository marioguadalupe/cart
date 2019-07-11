var React = require('react');
var Total = require('./Total.js')

class Cart extends React.Component {
  
  render() {
    return (
      <div>
        <h1>
            {Total.totalPrice}
        </h1>

      </div>   
    )
  }
};


module.exports = Cart;
