import React, { Component } from "react";
import { Route } from "react-router-dom";
import Swing from "react-reveal/Swing";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./components/home/Home";
import Projects from "./components/project/Projects";
import Resume from "./components/resume/resume";
import { Icons } from "./styles/commonStyles";
import HelloLemon from "./components/project/HelloLemon";

AOS.init();

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Icons right>
            <Swing count={3} duration={2000} delay={2000}>
              <a href='mailto:nb.leila10@gmail.com' target='_blank' rel='noopener noreferrer'>
                <i className='far fa-envelope' />
              </a>
            </Swing>
            <Swing count={3} duration={2000} delay={3000}>
              <a href='https://www.linkedin.com/in/leila-berrouayel/' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-linkedin' />
              </a>
            </Swing>
            <Swing count={3} duration={2000} delay={4000}>
              <a href='https://github.com/leila100' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-github' />
              </a>
            </Swing>
          </Icons>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/helloMelon' component={HelloLemon} />
          <Route path='/resume' component={Resume} />
        </div>
      </>
    );
  }
}

export default App;
