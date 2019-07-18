var React = require('react');
var NavLink = require('react-router-dom').NavLink;

class Header extends React.Component {
    render() {
  return (
    <div className='header-bar'>
      <h1 className='store-name'>
        <NavLink activeClassName='active' to='/'>
          SkullCandy
        </NavLink>
        
      </h1>
      <p className='cart'>
          <NavLink activeClassName='active' to='/cart'>
            <i class="material-icons">shopping_cart</i>
          </NavLink>
      </p>
    </div>
  )
}
};

module.exports = Header;