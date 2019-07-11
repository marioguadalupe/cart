var React = require('react');
var ReactDOM = require('react-dom');
var articles = require('../data/articles.json');
var Cart = require('../components/Cart.js');
var Adder = require('../components/Adder')

function articlesGrid(){
  return (
  <ul className='home-list'>
    {articles.map(function(article){
      return (
      <li key={article.name} className='home-item'>
        <ul className='space-list-items'>
          <li>{'ID '+article.id}</li>
          <li>
            <img 
              className='phonePic'
              src={article.image}
              alt={'Phone Picture model' + article.brand + article.name}
            />
          </li>
          <li>{article.brand +' '+ article.name}</li>
          
          <li>
            {`${article.status} $ ${article.price} `} 
            <button 
              type="button" 
              className="adder"
              onClick={()=>{Adder(article.price)}}>
                Add 
              <span id="counter1"> 0</span>
            </button>
          </li>
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