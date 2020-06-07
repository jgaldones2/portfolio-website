import React, { useState } from 'react';
import './navbar.css';
import Contact from './contact';
import { Link } from 'react-router-dom';
import AppTheme from '../context/AppTheme';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MainNav(props) {
  const [contact, setContact] = useState(false);

  const page = props.page; 
  const currentTheme = AppTheme[page];

  const navStyle = {
    color: `${currentTheme.fontColor}`,
  }

  const NavItem = styled.a`&::before {
      background-color: ${currentTheme.fontColor};
    }
  `;

  function scrollTo(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='main-nav' style={{color:`${currentTheme.fontColor}`}}>
      <div className='brand'>
        <NavItem onClick={() => scrollTo('intro')}><img alt='logo' src={`${currentTheme.logo}`} /></NavItem>
      </div>
      <div className='nav'>
        <NavItem onClick={() => scrollTo('intro')}>Intro</NavItem>
        <NavItem onClick={() => scrollTo('about')}>About</NavItem>
        <NavItem onClick={() => scrollTo('projects')}>Projects</NavItem>
      </div>
      <div className='contact'>
        <NavItem as={Link} onClick={ props.toggle } style={navStyle}>Contact</NavItem>
      </div>
      { props.modalState ? <Contact toggle={ props.toggle } page={props.page} style={navStyle} /> : null }
      <div className='icon'>
        <a className='bars' href='javascript:void(0)'>
          <FontAwesomeIcon icon={faBars} size='1x' color={`${currentTheme.fontColor}`} />
        </a>
      </div>
    </div>
  );
}

export default MainNav;