import React, { Component } from 'react';
import logo from './logo.svg';
import ApplicationViews from './Components/ApplicationViews'
import NavBar from './Components/navbar/NavBar'
import './App.css';

class TriviaApp extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>  
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default TriviaApp;
