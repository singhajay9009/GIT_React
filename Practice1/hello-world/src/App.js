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
  
            Hello World!
            { /*  <Greet />  */ }
            <Greet name='Clark' superhero='Supername' >
              <p>This is children prop1</p>
              <p> This is children prop2</p>
              </Greet>
            <Greet name='Daina' superhero='wonder woman'/>
            <Welcome />
            <Hello />
        
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
