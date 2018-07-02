import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>App Title</h1>
      <Link to="/">Home</Link> | <Link to="/component">Component</Link>
    </div>
  );
}

export default Header;
