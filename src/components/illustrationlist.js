import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppTheme from '../context/AppTheme';
import ThemeContext from '../context/ThemeContext';
import illustrations from '../static/illustrations';

function IllustrationList() {
  const theme = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  function Illustrations() {
    return(
      illustrations.Illustrations.map(item => (
          <Row style={{paddingTop:'10vh', paddingBottom:'10vh'}}>
            <Col md={6} style={{textAlign:'center'}}>
              <h1 style={{color: `${currentTheme.fontColor}`}}>
                {item.title}
              </h1>
              <h5 style={{color: `${currentTheme.fontColor}`}}>
                {item.date}
              </h5>
              <p style={{color: `${currentTheme.fontColor}`}}>
                {item.description}
              </p>
            </Col>
            <Col md={6} style={{display:'flex', justifyContent:'center'}}>
              <img alt={item.title} src={item.image} style={{maxWidth:'80%', height:'auto', objectFit:'contain'}} />
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