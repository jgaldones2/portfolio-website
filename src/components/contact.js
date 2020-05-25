import React, { useContext } from 'react';
import './contact.css'
import SocialMedia from './socialmedia';
import Info from '../static/info';
import ThemeContext from '../context/ThemeContext';
import AppTheme from '../context/AppTheme';
import styled from 'styled-components';

function Contact(props) {
  const theme = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  const Email = styled.a`
    font-size: 50px;
    position: relative;
    color: black;

    &::before {
      background-color: ${currentTheme.pageColor};
    }

    &:hover {
      color: ${currentTheme.pageColor};
    } 
  `;

  const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${currentTheme.pageColor};
  `;

  function handleClick() {
    props.toggle();
  };

  return (
    <Overlay>
      <div className='popup'>
        <div className='popup-content'>
          <div className='close-button'>
            <span className='close' onClick={ handleClick }>
              &times;
            </span>
          </div>
          <div className='contact-info'>
            <h3>Contact Me!</h3>
            <Email href='mailto:jygaldones@gmail.com'>
              { Info.email }
            </Email>
          </div>
          <div className='social'>
            <h3>Social</h3>
            <SocialMedia />
          </div>
        </div>
      </div>
    </Overlay>
  );
}

export default Contact;