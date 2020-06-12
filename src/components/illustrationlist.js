import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import illustrations from '../static/illustrations';
import './illustrationlist.css';

function IllustrationList() {
  function Illustrations() {
    return(
      illustrations.Illustrations.map(item => (
        <Row key={item.title} style={{paddingTop:'3vh', paddingBottom:'10vh'}}>
          <Col md={7} style={{textAlign:'center'}}>
            <h1 className='title'>{item.title}</h1>
            <h2 className='date'>{item.date}</h2>
            <p className='description'>{item.description}</p>
          </Col>
          <Col md={5} style={{display:'flex', justifyContent:'center'}}>
            <img className='illustration-img' alt={item.title} src={item.image} />
          </Col>
        </Row>
      ))
    );
  }

  return(
    <Container>
      <Illustrations />
    </Container>
  );
}

export default IllustrationList;