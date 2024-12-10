import React, { useState } from 'react';
import '../styles/Header.css';
import { CiShoppingBasket } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
import { FaMoon } from 'react-icons/fa';

const Header = () => {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    const root = document.getElementById('root');
    setTheme(!theme);
    if (theme) {
      root.style.backgroundColor = 'black';
      root.style.color = '#fff';
    } else {
      root.style.backgroundColor = '#fff';
      root.style.color = 'black';
    }
   
  };

  return (
    <div
      style={{
        display: 'flex',
        FlexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '2rem',
      }}
    >
      <div className='flex-row'>
        <img src='/logo.png' alt='logo' className='logo' />
        <p className='logo-text'> Caner Corp. </p>
      </div>
      <div className='flex-row'>
        <input
          className='search-input'
          type='text'
          placeholder='Search Something'
        />

        <div>
          {theme ? (
            <FaMoon className='icon' onClick={changeTheme}  />
          ) : (
            <CiLight className='icon' onClick={changeTheme} />
          )}

          <CiShoppingBasket className='icon' />
        </div>
      </div>
    </div>
  );
};

export default Header;
