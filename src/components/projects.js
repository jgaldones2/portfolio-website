import React, { useContext } from 'react';
import './projects.css';
import AppTheme from '../context/AppTheme';
import ThemeContext from '../context/ThemeContext';

function Projects() {
  const theme = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  return(
    <div className='projects'>
      <div className='projects-intro'>
        <h1 style={{color: `${currentTheme.fontColor}`}}>WHATCHA DOIN?</h1>
      </div>
    </div>
  );
}

export default Projects;