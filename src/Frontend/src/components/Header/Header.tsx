import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.SFC = () => (
  <header className="site-header">
    <div className="site-header__navbar">
      <div className="container">
        <Link to="/" className="site-header__navbar__logo">Dotnet-React</Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dogs">Dogs</NavLink>
          <NavLink to="/dog/monroe">Monroe</NavLink>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
