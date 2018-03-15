import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.title = 'React App';
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="React Logo" />
          <h1 className="App-title">Welcome to {this.title}!</h1>
        </header>
        <p className="App-intro">
          To get started
        </p>
      </div>
    );
  }
}

export default App;
