var React = require('react');


class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalPay: 0,
      articles: []
    };
    this.total = this.total.bind(this);  
  }

  total() {
    const totalPay = this.props.articlesInCart.reduce(function (finalPrice, article) {
      return article.price + finalPrice
    }, this.state.totalPay);

    this.setState({ totalPay })
  }

  componentDidMount() {
    this.total();
    this.verify(this.props.articlesInCart, this.state.articles);
  }

  verify(list, addTo) {
    list.forEach(function (element) {
      if (addTo.every(function (check) {
        return check.name != element.name
      })) { 
        return element.amount = 1, addTo.push(element) 
      }
      else {
        addTo.forEach(function (ele) {
          if (ele.name == element.name) {
            ele.amount += 1
          }
        })
      }
    })
  }

  render() {

    const articles = this.state.articles;
    
    return (
      <div>
        <h1>
          Cart
        </h1>
        <ul>

          {articles.map(function(article){
            return (
              <div>
                <img src={article.image} alt={article.name}/>
                <li key={article.brand}>{article.brand +' '+ article.name}</li>
                <li key={article.status}>{`${article.status} $ ${article.price} `}</li>
                <li key={article.id}>{article.amount}</li>
                
              </div>
            )
          })}
        </ul>

        <ul>
          <li key='coupon'>Coupon:</li>
          <li key='subtotal'>{`Subtotal: ${this.state.totalPay}`}</li>
          <li key='shipping '>Shipping:</li>
          <li key='total'>{`TOTAL: ${this.state.totalPay}`}</li>
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
