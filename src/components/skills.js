import React, { useEffect } from 'react';
import { Container, Row, Col } from  'react-bootstrap';
import aboutData from '../static/aboutData';
import AppTheme from '../context/AppTheme';
import SkillItem from './skillitem';
import Parallax from 'parallax-js';
import './skills.css';

function Skills() {
  const currentTheme = AppTheme['skills'];
  const nextTheme = AppTheme['projects'];
  const skills  = AppTheme['skills'];

  useEffect(() => {
    var scene = document.getElementById('skills-scene');
    var parallaxInstance = new Parallax(scene);
  });

  function TechnicalSkills(props) {
    if(props.type === 'languages')  {
      return(
        <Col lg={4}>
          <h3>Languages</h3>
          <div className='item-container'>
            {aboutData.Skills.Technical.Languages.map(language => (
              <SkillItem key={language} color={skills.technical.languages} text={language} />
            ))}
          </div>
        </Col>
      );
    } else if(props.type === 'frameworks') {
      return(
        <Col lg={4}>
          <h3>Frameworks</h3>
          <div className='item-container'>
            {aboutData.Skills.Technical.Frameworks.map(framework => (
              <SkillItem key={framework} color={skills.technical.frameworks} text={framework} />
            ))}
          </div>
        </Col>
      );
    } else if(props.type === 'misc') {
      return(
        <Col lg={4}>
          <h3>Miscellaneous</h3>
          <div className='item-container'>
            {aboutData.Skills.Technical.Miscellaneous.map(misc => (
              <SkillItem key={misc} color={skills.technical.misc} text={misc} />
            ))}
          </div>
        </Col>
      );
    }
  }

  function CreativeSkills() {
    return (
      <Col>
        <div className='item-container'>
          {aboutData.Skills.Creative.map(item => (
            <SkillItem key={item} color={skills.creative} text={item} />
          ))}
        </div>
      </Col>
    );
  }

  function Courses(props) {
    if(props.type === 'cs') {
      return (
        <Col  lg={6}>
          <h3>Computer Science</h3>
          <div className='item-container'>
            {aboutData.Skills.Courses.Technical.map(course =>  (
              <SkillItem key={course} color={skills.courses.cs} text={course} />
            ))}
          </div>
        </Col>
      );
    } else if(props.type === 'business') {
      return (
        <Col lg={6}>
          <h3>Business</h3>
          <div className='item-container'>
            {aboutData.Skills.Courses.Business.map(course =>  (
              <SkillItem key={course} color={skills.courses.business} text={course} />
            ))}
          </div>
        </Col>
      );
    }
  }

  return(
    <div className='skills' id='skills' style={{backgroundColor:`${currentTheme.pageColor}`, color:`${currentTheme.fontColor}`}}>
      <div data-relative-input='true' data-hover-only='true' id='skills-scene' className='skills-intro'>
        <h1 data-depth='0.3'>SKILLS.</h1>
      </div>
      <div className='skills-list'>
        <Container>
          <div className='skills-section'>
            <h2>Technical</h2>
            <Row>
              <TechnicalSkills  type='languages' />
              <TechnicalSkills  type='frameworks' />
              <TechnicalSkills  type='misc' />
            </Row>
          </div>
          <div className='skills-section'>
            <h2>Creative</h2>
            <Row>
              <CreativeSkills  />
            </Row>
          </div>
          <div className='skills-section'>
            <h2>USC</h2>
            <Row>
              <Courses type='cs' />
              <Courses type='business'  />
            </Row>
          </div>
        </Container>
      </div>
      <div className='transition' style={{minHeight:'25vh', backgroundImage:`linear-gradient(${currentTheme.pageColor}, ${nextTheme.pageColor})`}} />
    </div>
  );
}

export default Skills;