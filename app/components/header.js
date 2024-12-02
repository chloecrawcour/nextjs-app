"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div id="header">
      <div id="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul id="top-buttons">
                <li>
                  <a href="#">
                    <i className="fa fa-sign-in"></i> Login
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-pencil-square-o"></i> Register
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <div className="language-switcher">
                    <span><i className="fa fa-globe"></i> English</span>
                    <ul>
                      <li><a href="#">Deutsch</a></li>
                      <li><a href="#">Español</a></li>
                      <li><a href="#">Français</a></li>
                      <li><a href="#">Português</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="nav-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <a href="/" className="nav-logo">
                <img src="/images/logo.png" alt="One Ring Rentals" />
              </a>

              {/* BEGIN SEARCH */}
              <div id="sb-search" className="sb-search">
                <form onSubmit={handleSearchSubmit}>
                  <input
                    className="sb-search-input"
                    placeholder="Search..."
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    name="search"
                    id="search"
                  />
                  <button type="submit" className="sb-search-submit">
                    <i className="fa fa-search sb-icon-search"></i>
                  </button>
                </form>
              </div>
              {/* END SEARCH */}

              {/* BEGIN MAIN MENU */}
              <nav className="navbar">
                <button id="nav-mobile-btn">
                  <i className="fa fa-bars"></i>
                </button>
                <ul className="nav navbar-nav">
                  <li><a href="/">Find a Rental</a></li>
                  <li><a href="#">List your rental</a></li>
                  <li><a href="#">Travel Guides</a></li>
                  <li><a href="/regions">Regions</a></li>
                  <li><a href="/news">News</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>
              {/* END MAIN MENU */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
