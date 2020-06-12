import React from 'react';
import technicalProjects from '../static/technicalProjects';
import AppTheme from '../context/AppTheme';
import SkillItem from './skillitem';
import './technicalprojectslist.css';

function TechnicalProjectsList(props) {
  const skills  = AppTheme['skills'];

  function TechProjects() {
    return (
      technicalProjects.Projects.map(project => (
        <div key={project.title} className='project'>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className='project-skills'>
            {project.skills.languages.map(skill => {
              return (
                <SkillItem key={project.title + skill} text={skill} color={skills.technical.languages} />
              );
            })}
            {project.skills.frameworks.map(framework => {
              return (
                <SkillItem key={project.title + framework} text={framework} color={skills.technical.frameworks} />
              );
            })}
            {project.skills.misc.map(misc => {
              return (
                <SkillItem key={project.title + misc} text={misc} color={skills.technical.misc} />
              );
            })}
          </div>
        </div>
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