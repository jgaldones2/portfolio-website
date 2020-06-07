import React, { useEffect } from 'react';
import './projects.css';
import AppTheme from '../context/AppTheme';
import illustrations from '../static/illustrations';
import IllustrationList from './illustrationlist';
import technicalProjects from '../static/technicalProjects';
import Parallax from 'parallax-js';

function Projects() {
  const currentTheme = AppTheme['projects'];

  useEffect(() => {
    var scene = document.getElementById('projects-scene');
    var parallaxInstance = new Parallax(scene);
  });

  return(
    <div className='projects' id='projects' style={{backgroundColor:`${currentTheme.pageColor}`, color:`${currentTheme.fontColor}`}}>
      <div data-relative-input='true' data-hover-only='true' id='projects-scene' className='projects-intro'>
        <h1 data-depth='0.3'>PROJECTS.</h1>
      </div>
      <div className='technical-projects'>
        <h1 className='technical-projects-title'>Technical Projects</h1>
        <p className='technical-projects-description'>{ technicalProjects.General }</p>
      </div>
      <div className='illustrations'>
        <h1 className='illustrations-title'>Illustrations</h1>
        <p className='illustrations-description'>{ illustrations.General }</p>
        <IllustrationList /> 
      </div>
    </div>
  );
}

export default Projects;