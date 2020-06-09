import React from 'react';
import Contact from './contact';
import { Link } from 'react-router-dom';
import AppTheme from '../context/AppTheme';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

function MainNav(props) {
  const page = props.page; 
  const currentTheme = AppTheme[page];

  const NavStyle = {
    color: `${currentTheme.pageColor}`,

  }

  const NavItem = styled.a`
    &::before {
      background-color: ${currentTheme.pageColor};
    }
  `;

  function scrollTo(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='main-nav'>
      <div className='brand'>
        <NavItem onClick={() => scrollTo('intro')}><img alt='logo' src={`${currentTheme.logo}`} /></NavItem>
      </div>
      <div className='nav'>
        <NavItem onClick={() => scrollTo('intro')} style={NavStyle}>Intro</NavItem>
        <NavItem onClick={() => scrollTo('about')} style={NavStyle}>About</NavItem>
        <NavItem onClick={() => scrollTo('skills')} style={NavStyle}>Skills</NavItem>
        <NavItem onClick={() => scrollTo('projects')} style={NavStyle}>Projects</NavItem>
      </div>
      <div className='contact'>
        <NavItem as={Link} onClick={ props.toggle } style={NavStyle} >Contact</NavItem>
      </div>
      { props.modalState ? <Contact toggle={ props.toggle } page={props.page}/> : null }
      <div className='icon'>
        <span className='bars' onClick={ props.toggle }>
          <FontAwesomeIcon icon={faBars} size='1x' color={`${currentTheme.fontColor}`} />
        </span>
      </div>
    </div>
  );
}

export default MainNav;