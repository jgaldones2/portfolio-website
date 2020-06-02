import React, { useEffect, useContext } from 'react';
import AppTheme from '../context/AppTheme';
import ThemeContext from '../context/ThemeContext';
import Parallax from 'parallax-js';
import Sketch from 'react-p5';
import './intro.css'

function Intro() {
  const theme = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  useEffect(() => {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  });

  let theta1 = 0.0;
  let theta2 = 0.0;
  let theta3 = 0.0;
  let theta4 = 0.0;
  let period = 500.0;

  function setup(p5, canvasParentRef) {
    p5.createCanvas(1000, 700).parent(canvasParentRef);
  };

  function draw(p5) {
    p5.background(`${currentTheme.pageColor}`);
    renderWave1(p5);
    renderWave2(p5);
    renderWave3(p5);
    renderWave4(p5);
  }

  function renderWave1(p5) {
    let w = p5.width + 16;
    let dx = (p5.TWO_PI / period);
    let yvalues = new Array(p5.floor(w));
    let amplitude = 75.0
    
    // Increment theta (try different values for
    // 'angular velocity' here)
    theta1 += 0.02;
  
    // For every x value, calculate a y value with sine function
    let x = theta1;
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = p5.sin(x) * amplitude;
      x += dx;
    }
    
    p5.stroke('rgba(255, 255, 255, 0.3)')
    p5.fill(255);
    for (let x = 0; x < yvalues.length; x++) {
      p5.line(x, p5.height, x, yvalues[x] + p5.height/2);
    }
  }
  
  function renderWave2(p5) {
    let w = p5.width + 16;
    let dx = (p5.TWO_PI / period);
    let yvalues = new Array(p5.floor(w));
    let amplitude = 10
    
    // Increment theta (try different values for
    // 'angular velocity' here)
    theta2 += 0.01;
  
    // For every x value, calculate a y value with sine function
    let x = theta2;
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = p5.sin(x) * amplitude;
      x += dx;
    }
    
    p5.stroke('rgba(255, 255, 255, 0.5)')
    p5.fill(255);
    for (let x = 0; x < yvalues.length; x++) {
      p5.line(x - 15, p5.height, x - 15, yvalues[x] + p5.height/2);
    }
  }
  
  function renderWave3(p5) {
    let w = p5.width + 16;
    let dx = (p5.TWO_PI / period);
    let yvalues = new Array(p5.floor(w));
    let amplitude = 35;
    
    // Increment theta (try different values for
    // 'angular velocity' here)
    theta3 += 0.015;
  
    // For every x value, calculate a y value with sine function
    let x = theta3;
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = p5.sin(x) * amplitude;
      x += dx;
    }
    
    p5.stroke('rgba(255, 255, 255, 0.5)')
    p5.fill(255);
    for (let x = 0; x < yvalues.length; x++) {
      p5.line(x - 7, p5.height, x - 7, yvalues[x] + p5.height/2);
    }
  }
  
  
  function renderWave4(p5) {
    let w = p5.width + 16;
    let dx = (p5.TWO_PI / period);
    let yvalues = new Array(p5.floor(w));
    let amplitude = 50;
    
    // Increment theta (try different values for
    // 'angular velocity' here)
    theta4 += 0.005;
  
    // For every x value, calculate a y value with sine function
    let x = theta4;
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = p5.sin(x) * amplitude;
      x += dx;
    }
    
    p5.stroke('rgba(255, 255, 255, 0.5)')
    p5.fill(`${currentTheme.pageColor}`);
    for (let x = 0; x < yvalues.length; x++) {
      p5.line(x - 7, p5.height, x - 7, yvalues[x] + p5.height/2);
    }
  }

  return (
    <div data-relative-input='true' className='intro' id='scene' style={{backgroundColor: `${currentTheme.pageColor}`}}>
      {/* <Sketch className='p5' setup={setup} draw={draw}  style={{zIndex: '1'}}/> */}
      <div data-depth='0.3'>
        <div className='intro-title'>
          <h1>John Galdones</h1>
        </div>
        <div className='intro-subtitle'>
          <h2>
            Full Stack Developer. Playlist Creator. Trojan.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;