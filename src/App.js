import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  generateRandomValue = () => Math.floor(Math.random() * 100)
  generateProposedAnswer = (value1, value2, value3) => Math.floor(Math.random() * 3) + value1 + value2 + value3;

  getInitialState = () => {
    const value1 = this.generateRandomValue();
    const value2 = this.generateRandomValue();
    const value3 = this.generateRandomValue();
    
    const proposedAnswer = this.generateProposedAnswer(value1, value2, value3);
    
    return {
      value1: value1,
      value2: value2,
      value3: value3,
      proposedAnswer: proposedAnswer,
      numQuestions: 0,
      numCorrect: 0
  	}
  }

  state = this.getInitialState();

  onCheckAnswer = (answer) => {
    this.setState((currentState) => {
      
      const value1 = this.generateRandomValue();
      const value2 = this.generateRandomValue();
      const value3 = this.generateRandomValue();

      const proposedAnswer = this.generateProposedAnswer(value1, value2, value3);
      
      if ((answer && (currentState.value1 + currentState.value2 + currentState.value3 === currentState.proposedAnswer))
          || (!answer && (currentState.value1 + currentState.value2 + currentState.value3 !== currentState.proposedAnswer))
         ) {
          return {
            value1: value1,
            value2: value2,
            value3: value3,
            proposedAnswer: proposedAnswer,
            numQuestions: currentState.numQuestions + 1,
            numCorrect: currentState.numCorrect + 1
          }
      } else {
         return {
            value1: value1,
            value2: value2,
            value3: value3,
            proposedAnswer: proposedAnswer,
            numQuestions: currentState.numQuestions + 1,
            numCorrect: currentState.numCorrect
          }
      }
	})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.onCheckAnswer(true)}>True</button>
          <button onClick={() => this.onCheckAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
