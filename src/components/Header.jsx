import React from 'react';
import '../styles/Header.css'

const Header = () => {
  return <div style={{display:'flex', FlexDirection:'row', justifyContent:'space-between'   }}  >
    <div className='flex-row'>
    <img src="/logo.png" alt="logo" className="logo" />
    <p className='logo-text'> Caner Corp. </p>
    </div>
    <div>
        <input type="text"  />
    </div>
  </div>
};

export default Header;
