var ArticlesList = require('../articles/articlesList.js');
var Brands = require('./Brands.js');
var Home = require('./Home.js');
var Header = require('./Header.js');
var Cart = require('./Cart.js');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <Header/>
            
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/shop' component={Home} />
              <Route exact path='/cart' component={Cart} />
              <Route render={function () {
                return <p>Not Found</p>
                }} />
            </Switch>
          </div>
        </Router>
        
      )
    }
};


module.exports = App;