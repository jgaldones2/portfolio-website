import React, { useEffect, useContext } from 'react';
import AppTheme from '../context/AppTheme';
import Parallax from 'parallax-js';
import './intro.css'

function Intro() {
  const currentTheme = AppTheme['intro'];
  const nextTheme = AppTheme['about'];

  useEffect(() => {
    var scene = document.getElementById('intro-scene');
    var parallaxInstance = new Parallax(scene);
  });

  return (
    <div className='intro' id='intro' style={{backgroundColor:`${currentTheme.pageColor}`, color:`${currentTheme.fontColor}`}}>
      <div className='landing' id='intro-scene' data-relative-input='true' data-hover-only='true'>
        <div data-depth='0.3'>
          <div className='intro-title'>
            <h1>John Galdones</h1>
          </div> 
          <div className='intro-subtitle'>
            <h2> 
              Full Stack Developer. Playlist Creator. Trojan.
            </h2>
          </div>
        </div>
      </div>
      <div style={{height:'25vh', width:'100%', backgroundImage:`linear-gradient(${currentTheme.pageColor}, ${nextTheme.pageColor})` }}/>
    </div>
  );
}

export default Intro;