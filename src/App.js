import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainNav from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
  const [page, setPage] = useState('intro');
  const [modal, setModal] = useState(false);

  var isInViewport = (element) => {
    var bounding = element.getBoundingClientRect();
    return(
      bounding.top <= 0 &&
      bounding.bottom >= 1
    );
  }

  useEffect(() => {
    const intro = document.getElementById('intro');
    const about = document.getElementById('about');
    const projects = document.getElementById('projects');

    // console.log(intro.getBoundingClientRect());
    // console.log(about.getBoundingClientRect());
    // console.log(projects.getBoundingClientRect());

    window.addEventListener('scroll', function (event) {
      if(isInViewport(intro)) {
        setPage('intro');
      } else if(isInViewport(about)) {
        setPage('about');
      } else if(isInViewport(projects)) {
        setPage('projects');
      }
    });
  });

  function toggleModal() {
    setModal(!modal);
    if(!modal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }

  return (
    <div>
      
      {/* <div style={{position:'fixed'}}>{page}</div> */}
      <MainNav modalState={ modal } toggle={ toggleModal } page={ page } />
      {/* <Main changeContext={ changeContext } /> */}
      <Intro />
      <About />
      <Projects />
      <Footer page={page}/>
    </div>
  );
}
 
export default App;
