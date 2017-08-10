import React, { Component } from 'react';
import Flashcard from './Flashcard'
import NavButton from './NavButton'
import base from './base'
import './App.css';

class App extends Component {
  /*
    create state ... add questions to state ... pass questions to
    Flashcard through science or magic
  */
  constructor() {
    super()

    this.state = {
      questions: ['starting value']
    }
  }

  componentWillMount() {
    base.syncState('questions', {
      context: this,
      state: 'questions',
      asArray: true
    })
  }


  render() {
    return (
      <div className="container">
        <NavButton direction="previous" content="<<" />
        <Flashcard questions={this.state} />
        <NavButton direction="next" content=">>" />
      </div>
    )
  }
}

export default App;
