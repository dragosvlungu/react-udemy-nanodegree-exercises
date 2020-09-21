import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    inputText: ''
  }

  updateText = (text) => {
    this.setState((currentState) => ({
      inputText: text
    })
   )
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" onChange={(event) => this.updateText(event.target.value)}/>
		  {this.state.inputText.length >0 && (
           <p className="echo">Echo: {this.state.inputText}</p>
			)}
		  {this.state.inputText.length >0 && (
           <p>This should mirror the text you typed into the input field.</p>
           )}
        </div>
      </div>
    );
  }
}

export default App;
