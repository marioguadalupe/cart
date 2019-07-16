var React = require("react");

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
    const totalPay = this.props.articlesInCart.reduce(function(
      finalPrice,
      article
    ) {
      return article.price + finalPrice;
    },
    this.state.totalPay);

    this.setState({ totalPay });
  }

  componentDidMount() {
    this.total();
    this.verify(this.props.articlesInCart, this.state.articles);
  }

  verify(list, addTo) {
    list.forEach(function(element) {
      if (
        addTo.every(function(check) {
          return check.name != element.name;
        })
      ) {
        return (element.amount = 1), addTo.push(element);
      } else {
        addTo.forEach(function(ele) {
          if (ele.name == element.name) {
            ele.amount += 1;
          }
        });
      }
    });
  }

  render() {
    const articles = this.state.articles;

    return (
      <div>
        <h1>Cart</h1>
        <ul>

          {articles.map(function(article) {
            return (
              <div className="articles-in-cart">
                <ul className="aricles-header">
                  <li key="item" className="aricles-header-item">Item</li>
                  <li key="price" className="aricles-header-price">Price</li>
                  <li key="quantity" className="aricles-header-quantity">Quantity</li>
                  <li key="total" className="aricles-header-total">Total</li>
                </ul>
                <ul className="article-in-cart-info">
                  <li key={article.brand} className="article-in-cart-item">
                    <img className="article-in-cart-image" src={article.image} alt={article.name} />
                    {article.brand + " " + article.name}
                  </li>
                  <li key={article.status} className="article-in-cart-price">
                    {`${article.status} $ ${article.price} `}
                  </li>
                  <li key={article.id} className="article-in-cart-quantity">
                    <input type="number" value={article.amount}/>
                    
                  </li>
                  <li key="total-amount" className="article-in-cart-total-amount">
                    {article.price * article.amount}
                  </li>
                </ul>
                
              </div>
            );
          })}
        </ul>
        <div className="purchase-information">

          <ul className="details-purchase-information">
            <div className="top-buttons">
              <form className="enter-code"><input type="text" placeholder="Enter your coupon code"/></form>


              <button type="button" className="apply">
                APPLY
              </button>
            </div>
            <li key="coupon">Coupon:</li>
            <li key="subtotal">{`Subtotal: ${this.state.totalPay}`}</li>
            <li key="shipping ">Shipping:</li>
            <li key="total">{`TOTAL: ${this.state.totalPay}`}</li>
          </ul>

        </div>
      <div className="all-buttons">
        <div className="credict-cards">
            <button type="button" className="paypal-button-b">
              <div class="paypal-b">PayPal CREDIT</div>
            </button>

            <button type="button" className="paypal-button-y">
              <span class="paypal-logo-y">
                <i className="pay-y">Pay</i>
                <i className="pal-y">Pal</i>
              </span>
              <span className="paypal-button-title-y">Checkout</span>
            </button>

          
            <div className="credict-cards-small" >
              <img className="visa-small-logo" src="../app/data/images/visalogosmall.png"/>
              <img className="mastercard-logo" src="../app/data/images/mastercardlogo.png"/>
              <img className="amex-logo" src="../app/data/images/amexlogo.jpg"/>
              <img className="discover-logo" src="../app/data/images/discoverlogo.png"/>
            </div>
        </div>
        <div className="large-buttons">

            
            <img className="visa-checkout" src="../app/data/images/visacheckoutlogo.jpg"/>
            <button type="button" className="checkout">
              CHECKOUT
            </button>
        </div>
      </div>

      </div>
    );
  }
}

module.exports = Cart;
