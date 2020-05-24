import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import History from './history';
import './about.css';
import '../static/aboutData';
import aboutData from '../static/aboutData';

class About extends Component {
  render() {
    return(
      <div className='about'>
        <div className='about-intro'>
          <h1>WHO IS JOHN?</h1>
        </div>
        <div className='summary'>
          <Container style={{height: '100%;'}}>
            <Row>
              <Col>
                <div className='profile-pic'>
                  <img alt='pfp' src={'../images/profilepic.jpg'} />
                </div>
              </Col>
              <Col>
                <div className='general'>
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
          <h1 className='history-title'>The History of John</h1>
          <History timeline={ aboutData.Timeline } />
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default About;