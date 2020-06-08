import React, { useEffect } from 'react';
import { Container, Row, Col } from  'react-bootstrap';
import aboutData from '../static/aboutData';
import AppTheme from '../context/AppTheme';
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
            {aboutData.Skills.Technical.Languages.map(misc => (
              <span className='item' style={{backgroundColor:`${skills.technical.languages}`}}>{ misc }</span>
            ))}
          </div>
        </Col>
      );
    } else if(props.type === 'frameworks') {
      return(
        <Col lg={4}>
          <h3>Frameworks</h3>
          <div className='item-container'>
            {aboutData.Skills.Technical.Frameworks.map(misc => (
              <span className='item' style={{backgroundColor:`${skills.technical.frameworks}`}}>{ misc }</span>
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
              <span className='item' style={{backgroundColor:`${skills.technical.misc}`}}>{ misc }</span>
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
            <span className='item' style={{backgroundColor:`${skills.creative}`}}>{ item }</span>
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
              <span className='item' style={{backgroundColor:`${skills.courses.cs}`}}>{ course }</span>
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
              <span className='item' style={{backgroundColor:`${skills.courses.business}`}}>{ course }</span>
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