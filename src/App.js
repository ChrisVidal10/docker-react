import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Ready! 7th chapter from docker - kubernetes course at Udemy!
          </p>
          <a
            className="App-link"
            href="https://github.com/ChrisVidal10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>@chrisvidal10</code>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
