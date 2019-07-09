var React = require('react');
var ReactDOM = require('react-dom');
var articles = require('../data/articles.json')

function articlesGrid(){
  return (
  <ul className='home-list'>
    {articles.map(function(article){
      return (
      <li key={article.name} className='home-item'>
        <ul className='space-list-items'>
          <li>
            <img 
              className='phonePic'
              src={article.image}
              alt={'Phone Picture model' + article.brand + article.name}
            />
          </li>
          <li>{article.brand}</li>
          <li>{article.name}</li>
          <li>{article.status +' $' + article.price}</li>
        </ul>
      </li>
      )
    })}
  </ul>
  )
}


class ArticlesList extends React.Component {
    render() {
      return (
        <div>
          {articlesGrid()}
        </div>
        
      )
    }
};


module.exports = ArticlesList;