import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainNav from './components/navbar';
import Main from './components/main';
import ThemeContext from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState('intro');

  function changeContext(pathname) {
    if(pathname === '/') {
      setTheme('intro');
    } else if(pathname === '/about') {
      setTheme('about');
    } else if(pathname === '/projects') {
      setTheme('projects');
    }
    console.log(theme);
  }

  return (
    <ThemeContext.Provider value={ theme } >
      <div>
        <MainNav />
        <Main changeContext={ changeContext } />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
