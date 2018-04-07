import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.SFC = () => (
  <header className="site-header">
    <div className="site-header__navbar">
      <div className="container">
        <a href="#" className="site-header__navbar__logo">Dotnet-React</a>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dogs">Dogs</Link>
          <Link to="/dog/monroe">Monroe</Link>
        </nav>
      </div>
      
    </div>
    <nav className="site-header__navbar navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div className="container">

        <a href="#" className="navbar-brand">Dotnet-React</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/dogs" className="nav-link">Dogs</Link>
            </li>
            <li className="nav-item">
              <Link to="/dog/monroe" className="nav-link">Monroe</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  </header>
);

export default Header;
