import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Intro from './intro';
import About from './about';
import Projects from './projects';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Main(changeContext) {
  function usePageViews() {
    let location = useLocation();
    useEffect(() => {
      changeContext.changeContext(location.pathname);
    }, [location]);
  }

  usePageViews();
  return (
    <Switch>
      <Route exact path='/' component={Intro} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
    </Switch>
  );
}

export default Main;