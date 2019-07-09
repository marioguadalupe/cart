var React = require('react');
var ReactDOM = require('react-dom');
var ArticlesList = require('../articles/articlesList.js');

class App extends React.Component {
    render() {
      return (
        <div>
          <h1>
            TIENDA
          </h1>
          <ArticlesList/>
        </div>
        
      )
    }
};


module.exports = App;