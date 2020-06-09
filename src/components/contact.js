import React from 'react';
import SocialMedia from './socialmedia';
import Info from '../static/info';
import AppTheme from '../context/AppTheme';
import styled from 'styled-components';
import './contact.css'

function Contact(props) {
  const page = props.page;
  const currentTheme = AppTheme[page];

  const Email = styled.a`
    position: relative;
    color: black;

    &::before {
      background-color: ${currentTheme.pageColor};
    }

    &:hover {
      color: ${currentTheme.pageColor};
    } 
  `;

  function handleClick() {
    props.toggle();
  };

  return (
    <div className='overlay' onClick={ handleClick }>
      <div className='popup'>
        <div className='popup-content'>
          <div className='close-button'>
            <span className='close' onClick={ handleClick } style={{color:`${currentTheme.pageColor}`}}>
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
            <SocialMedia size='2x' page={page}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;