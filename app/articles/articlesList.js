var React = require('react');
var ReactDOM = require('react-dom');
var articles = require('../data/articles.json')

class ArticlesList extends React.Component {
    render() {
      return (
        <div>
          {articles.map(function(article){return <h1>{article.name} {article.brand} {article.price}<img src={article.image}/></h1>})}
        </div>
        
      )
    }
};


module.exports = ArticlesList;