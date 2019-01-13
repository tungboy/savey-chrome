/* eslint-disable no-undef */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  logTab = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tab) => console.log(tab))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.logTab}>Click</button>
        </header>
      </div>
    );
  }
}

export default App;
