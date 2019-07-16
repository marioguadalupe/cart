var React = require('react');
var ArticlesList = require('../articles/articlesList.js');
var Brands = require('./Brands.js');


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.articlesInCart);
    return (
      <div>
        <Brands />
        <ArticlesList addToCart={this.props.addToCart} />
      </div>

    )
  }
};


module.exports = Home;