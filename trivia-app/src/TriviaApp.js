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
            <h1 className="App-title">Welcome to Trivia</h1>
          </header>
        </div>  
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default TriviaApp;
