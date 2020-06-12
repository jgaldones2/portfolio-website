import React from 'react';
import SocialMedia from './socialmedia';
import Info from '../static/info';
import AppTheme from '../context/AppTheme';
import styled from 'styled-components';
import './popup.css';

function Popup(props) {
  const page = props.page;
  const currentTheme = AppTheme[page];
  const intro = AppTheme['intro'];
  const about = AppTheme['about'];
  const skills = AppTheme['skills'];
  const projects = AppTheme['projects'];

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

  function handleClickSmall(section) {
    props.toggle();
    props.scrollTo(section);
  }

  return (
    <div className='overlay'>
      <div className='popup'>
        <div className='popup-content-regular'>
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
        <div className='popup-content-small'>
          <div className='close-button'>
            <span className='close' onClick={ handleClick } style={{color:`${currentTheme.pageColor}`}}>
              &times;
            </span>
          </div>
          <div id='small-nav'>
            <a onClick={() => handleClickSmall('intro')} style={{color:`${intro.pageColor}`}}>INTRO</a>
            <a onClick={() => handleClickSmall('about')} style={{color:`${about.pageColor}`}}>ABOUT</a>
            <a onClick={() => handleClickSmall('skills')} style={{color:`${skills.pageColor}`}}>SKILLS</a>
            <a onClick={() => handleClickSmall('projects')} style={{color:`${projects.pageColor}`}}>PROJECTS</a>
          </div>
          <div className='contact-info'>
            <Email href='mailto:jygaldones@gmail.com'>
              { Info.email }
            </Email>
          </div>
          <div className='social'>
          <SocialMedia size='2x' page={page}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;