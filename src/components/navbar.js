import React, { useState, useContext } from 'react';
import './navbar.css';
import Contact from './contact';
import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import AppTheme from '../context/AppTheme';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MainNav() {
  const [contact, setContact] = useState(false);
  const page = useContext(ThemeContext);
  const currentTheme = AppTheme[page];

  const navStyle = {
    color: `${currentTheme.fontColor}`,
  }

  const NavItem = styled.a`
    color: ${currentTheme.fontColor};

    &:hover {
      color: ${currentTheme.fontColor};
    }
    
    &::before {
      background-color: ${currentTheme.fontColor};
    }
  `;

  function togglePopup() {
    setContact(!contact);
  }

  return (
    <div className='main-nav'>
      <div className='brand'>
        <Link to='/'><img alt='logo' src={`${currentTheme.logo}`} /></Link>
      </div>
      <div className='nav'>
        <NavItem as={Link} to='/'>Intro</NavItem>
        <NavItem as={Link} to='/about'>About</NavItem>
        <NavItem as={Link} to='/projects'>Projects</NavItem>
        <NavItem as={Link} to='/blogs'>Blogs</NavItem>
        <NavItem as={Link} to='CS Resume.pdf' target='_blank'>Résumé</NavItem>
      </div>
      <div className='contact'>
        <NavItem as={Link} onClick={ togglePopup } style={navStyle}>Contact</NavItem>
      </div>
      { contact ? <Contact toggle={ togglePopup } style={navStyle} /> : null }
      <div className='icon'>
        <a className='bars' href='javascript:void(0)'>
          <FontAwesomeIcon icon={faBars} size='2x' color={`${currentTheme.fontColor}`} />
        </a>
      </div>
    </div>
  );
}

export default MainNav;