import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import History from './history';
import Footer from './footer';
import './about.css';
import aboutData from '../static/aboutData';
import ThemeContext from '../context/ThemeContext';
import AppTheme from '../context/AppTheme';
import Parallax from 'parallax-js';

function About() {
  const page = useContext(ThemeContext);
  const currentTheme = AppTheme[page];

  useEffect(() => {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  });

  return(
    <div className='about' style={{ backgroundColor:`${currentTheme.pageColor}` }}>
      <div data-relative-input='true' data-hover-only='true' id='scene' className='about-intro'>
        <h1 data-depth='0.3' style={{ color: `${currentTheme.fontColor}` }}>ABOUT.</h1>
      </div>
      <div className='summary'>
        <Container style={{minHeight: '100vh;'}}>
          <Row>
            <Col md={6}>
              <div className='profile-pic'>
                <img alt='pfp' src={'../images/profilepic.jpg'} />
              </div>
            </Col>
            <Col md={6}>
              <div className='general' style={{ color:`${currentTheme.fontColor}` }}>
                <p>{aboutData.General}</p>
              </div>
              <div className='hobbies'>
                <p>{aboutData.Hobbies}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='history'>
        <h1 className='history-title' style={{ color:`${currentTheme.fontColor}` }}>The History of John</h1>
        <History timeline={ aboutData.Timeline } />
      </div>
      <Footer />
    </div>
  );
}

export default About;