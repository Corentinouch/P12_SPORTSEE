import React from 'react';
import './header.css'
import logo from '../asset/logo.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="Logo" />
        <a href="#">Accueil</a>
        <a href="#">Profil</a>
        <a href="#">Réglages</a>
        <a href="#">Communauté</a>
    </div>
  );
};

export default Header;
