import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const navStyle = {
    color: 'white'
  }

  return (
    <nav>
      <ul>
        <li><Link style={navStyle} to="/">Top Games</Link></li>
        <li><Link style={navStyle} to="/action">Action</Link></li>
        <li><Link style={navStyle} to="/strategy">Strategy</Link></li>
        <li><Link style={navStyle} to="/wishlist">Wishlist</Link></li>
        <li><Link style={navStyle} to="/search">Search</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;