var React = require('react');
var Total = require('./Total.js')


class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalPay:0
    };
    this.total = this.total.bind(this);
  }

  total(){
    console.log(this.props);
    const totalPay = this.props.articlesInCart.reduce(function(finalPrice, article){
      return article.price + finalPrice
    },this.state.totalPay);

    this.setState({totalPay})
  }

  componentDidMount(){
    this.total();
  }


  render() {
    return (
      <div>
        <h1>
            Cart 
        </h1>
        <ul>
          {this.props.articlesInCart.map(function(article){
            return (
              <div>
                <img src={article.image} alt={article.name}/>
                <li key={article.brand}>{article.brand +' '+ article.name}</li>
                <li key={article.status}>{`${article.status} $ ${article.price} `}</li>
                
              </div>
            )
          })}
        </ul>

        <ul>
          <li>Coupon:</li>
          <li>{`Subtotal: ${this.state.totalPay}`}</li>
          <li>Shipping:</li>
          <li>{`TOTAL: ${this.state.totalPay}`}</li>
        </ul>
        <button 
          type="button" 
          className="visa-checkout"
          >
            VISA Checkout 
        </button>
        <button 
          type="button" 
          className="checkout"
          >
            CHECKOUT 
        </button>
      </div>   
    )
  }
};


module.exports = Cart;
