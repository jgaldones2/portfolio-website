import React, { useState, useContext } from 'react';
import './navbar.css';
import Contact from './contact';
import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import AppTheme from '../context/AppTheme';

function MainNav() {
  const [contact, setContact] = useState(false);
  const theme = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  const navStyle = {
    color: `${currentTheme.fontColor}`,
  }

  function togglePopup() {
    setContact(!contact);
  }

  return (
    <div className='main-nav'>
      <div className='brand'>
        <Link to='/'><img alt='logo' src={`${currentTheme.logo}`} /></Link>
      </div>
      <div className='nav'>
        <Link to='/' style={navStyle}>Intro</Link>
        <Link to='/about' style={navStyle}>About</Link>
        <Link to='/projects' style={navStyle}>Technical Projects</Link>
        <Link to='/illustrations' style={navStyle}>Illustrations</Link>
      </div>
      <div className='contact'>
        <Link onClick={ togglePopup } style={navStyle}>Contact</Link>
      </div>
      { contact ? <Contact toggle={ togglePopup } style={navStyle} /> : null }
    </div>
  );
}

export default MainNav;