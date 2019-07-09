var React = require('react');
var NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component {
    render() {
  return (
    <div>
      <h1>
        <NavLink activeClassName='active' to='/shop'>
          Shop
        </NavLink>
        
      </h1>
      <h1>
        <NavLink activeClassName='active' to='/cart'>
          Cart
        </NavLink>
      </h1>
    </div>
  )
}
};

module.exports = Nav;