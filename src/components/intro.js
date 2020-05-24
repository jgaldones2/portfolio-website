import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import './intro.css'

class Intro extends Component {
  render() {
    return (
      <div className='intro'>
        <Container>
          <Row className='intro-title'>
            <h1>John Galdones</h1>
          </Row>
          <Row className='intro-subtitle'>
            <h2>Full Stack Developer. Playlist Creator. Trojan.</h2>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Intro;