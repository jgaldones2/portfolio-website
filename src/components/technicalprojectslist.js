import React from 'react';
import technicalProjects from '../static/technicalProjects';

function TechnicalProjectsList() {
  function TechProjects() {
    return (
      technicalProjects.Projects.map(project => (
        <div className='tech-project'>{project.title}</div>
      ))
    );
  }

  return (
    <div id='projects-container'>
      <TechProjects />
    </div>
  );
}

export default TechnicalProjectsList;