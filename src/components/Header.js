import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="main-header">
    <Link className="main-header__link" to="/">
      <h1 className="main-header__title">Sample Application</h1>
    </Link>
  </header>
);

export default Header;
