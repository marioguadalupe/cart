var React = require('react');
var ArticlesList = require('../articles/articlesList.js');
var Brands = require('./Brands.js');


class Home extends React.Component {
    render() {
      return (
        <div>
          <Brands/>
          <ArticlesList/>

        </div>
        
      )
    }
};


module.exports = Home;