import React, { Component } from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/navigation/Navbar";
import "./App.css";
import backImage from "./assets/images/background.jpg";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <>
        <div className='App'>
          <NavBar />
          <main>
            <Route exact path='/' component={Home} />
          </main>
        </div>
      </>
    );
  }
}

export default App;
