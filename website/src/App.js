import React, { Component } from "react";
import { Route } from "react-router-dom";
import Swing from "react-reveal/Swing";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./components/home/Home";
import Projects from "./components/project/Projects";
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
              <i className='far fa-envelope' />
            </Swing>
            <Swing count={3} duration={2000} delay={3000}>
              <i className='fab fa-linkedin' />
            </Swing>
            <Swing count={3} duration={2000} delay={4000}>
              <i className='fab fa-github' />
            </Swing>
          </Icons>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/helloMelon' component={HelloLemon} />
        </div>
      </>
    );
  }
}

export default App;
