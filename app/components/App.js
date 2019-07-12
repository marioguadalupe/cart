var ArticlesList = require("../articles/articlesList.js");
var Brands = require("./Brands.js");
var Home = require("./Home.js");
var Header = require("./Header.js");
var Cart = require("./Cart.js");
var React = require("react");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesInCart: []
    }

    this.addToCart = this.addToCart.bind(this);
  }
  
  addToCart(article){
    const articlesInCart = [...this.state.articlesInCart, article];
    
    this.setState({
      articlesInCart
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
              <Route exact path='/' render={() => {
                return <Home addToCart={this.addToCart} articlesInCart={this.state.articlesInCart} />
              }}/>
              <Route exact path='/cart' render={() => {
                return <Cart articlesInCart={this.state.articlesInCart} />
              }}/>
              <Route render={function () {
                return <p>Not Found</p>
                }} />
            <Route
              render={function() {
                return <p>Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
