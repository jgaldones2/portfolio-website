import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import History from './history';
import './about.css';
import aboutData from '../static/aboutData';
import Parallax from 'parallax-js';
import AppTheme from '../context/AppTheme';

function About() {
  const currentTheme = AppTheme['about'];
  const nextTheme = AppTheme['skills'];

  useEffect(() => {
    var scene = document.getElementById('about-scene');
    var parallaxInstance = new Parallax(scene);
  });

  return(
    <div className='about' id='about' style={{backgroundColor:`${currentTheme.pageColor}`, color:`${currentTheme.fontColor}`}}>
      <div data-relative-input='true' data-hover-only='true' id='about-scene' className='about-intro'>
        <h1 data-depth='0.3'>ABOUT.</h1>
      </div>
      <div className='summary'>
        <Container style={{minHeight: '100vh'}}>
          <Row>
            <Col md={4}>
              <div className='profile-pic'>
                <img alt='pfp' src={'../images/profilepic.jpg'} />
              </div>
            </Col>
            <Col md={8}>
              <div className='general'>
                <p>{aboutData.General}</p>
              </div>
              <div className='hobbies'>
                <p>{aboutData.Hobbies}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='resume-container'>
                <form action='./files/Resume.pdf' target='_blank'>
                  <input type='submit' value='My Resume' className='resume-button' />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='history'>
        <h1 className='history-title'>The History of John</h1>
        <History timeline={ aboutData.Timeline } />
      </div>
      <div className='transition' style={{minHeight:'25vh', backgroundImage:`linear-gradient(${currentTheme.pageColor}, ${nextTheme.pageColor})`}} />
    </div>
  );
}

export default About;