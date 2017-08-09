import React, { Component } from 'react';
import Flashcard from './Flashcard'
import NavButton from './NavButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavButton direction="previous" content="<<" />
        <Flashcard/>
        <NavButton direction="next" content=">>" />
      </div>
    )
  }
}

export default App;
