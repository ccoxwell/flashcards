import React, { Component } from 'react';
import Flashcard from './Flashcard'
import NavButton from './NavButton'
import base from './base'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.getQuestions = this.getQuestions.bind(this)
  }

  getQuestions() {
    base.fetch('questions', {
      context: this,
      asArray: true
    }).then(data => {
      console.log(data)
    }).catch(error => {
      console.error(error);
    })
  }

  render() {
    return (
      <div className="container">
        <NavButton direction="previous" content="<<" />
        <Flashcard/>
        <NavButton direction="next" content=">>" />
        <button onClick={this.getQuestions}>get questions</button>
      </div>
    )
  }
}

export default App;
