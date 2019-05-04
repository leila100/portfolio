import React, { Component } from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/navigation/Navbar";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/project/Projects";

class App extends Component {
  render() {
    return (
      <>
        <div className='App'>
          <NavBar />
          <main>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
          </main>
        </div>
      </>
    );
  }
}

export default App;
