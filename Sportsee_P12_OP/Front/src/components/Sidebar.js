import React from 'react';
import './sidebar.css'
import icon1 from '../asset/icon1.png'
import icon2 from '../asset/icon2.png'
import icon3 from '../asset/icon3.png'
import icon4 from '../asset/icon4.png'
const Header = () => {
  return (
    <div className='sidebar'>
        <nav>
            <img src={icon1} alt="Logo" />
      <img src={icon4} alt="Logo" />
      <img src={icon2} alt="Logo" />
      <img src={icon3} alt="Logo" />
        </nav>
      
      <span>Copiryght, SportSee 2020</span>
    </div>
  );
};

export default Header;
