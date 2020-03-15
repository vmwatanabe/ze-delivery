import React from 'react';
import logo from '../../assets/images/logo.png';
import './Header.scss';

const Header = () => (
  <div className="header">
    <div className="header-content">
      <div className="header-content__column">
        <img className="logo" src={logo} />
      </div>
      <div className="header-content_column">por Victor Matos Watanabe</div>
    </div>
  </div>
);

export default Header;
