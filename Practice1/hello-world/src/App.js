import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello World!
            { /*  <Greet />  */ }
            <Welcome />
            <Hello />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
