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
      <ul className='shop-cart'>
        <li key='shop'>
          <NavLink activeClassName='active' to='/shop'>
            Shop
          </NavLink>
        
        </li>
        <li key='cart'>
          <NavLink activeClassName='active' to='/cart'>
            Cart
          </NavLink>
        </li>
      </ul>
      
    </div>
  )
}
};

module.exports = Header;