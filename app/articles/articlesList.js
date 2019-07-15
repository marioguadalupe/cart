var React = require('react');
var articles = require('../data/articles.json');

function ArticlesList(props){
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
              onClick={()=> {props.addToCart(article)}}>
                Add 
            </button>
          </li>
        </ul>
      </li>
      )
    })}
  </ul>
  )
}


module.exports = ArticlesList;