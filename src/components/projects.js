import React, { useContext, useEffect } from 'react';
import './projects.css';
import AppTheme from '../context/AppTheme';
import ThemeContext from '../context/ThemeContext';
import Footer from './footer';
import illustrations from '../static/illustrations';
import IllustrationList from './illustrationlist';
import Parallax from 'parallax-js';

function Projects() {
  const theme = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  useEffect(() => {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  });

  return(
    <div className='projects' style={{ backgroundColor:`${currentTheme.pageColor}` }}>
      <div data-relative-input='true' id='scene' className='projects-intro'>
        <h1 data-depth='0.3' style={{color: `${currentTheme.fontColor}`}}>PROJECTS.</h1>
      </div>
      <div className='technical-projects' style={{ color:`${currentTheme.fontColor}` }}>
        <h1 className='technical-projects-title'>Technical Projects</h1>
      </div>
      <div className='illustrations' style={{ color:`${currentTheme.fontColor}` }}>
        <h1 className='illustrations-title'>Illustrations</h1>
        <IllustrationList illustrations={ illustrations } />
      </div>
      <Footer />
    </div>
  );
}

export default Projects;