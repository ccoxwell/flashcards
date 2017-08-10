import React, { Component } from 'react'
import './Flashcard.css'

class Flashcard extends Component {

  render() {
    return (
      <div className="flashcard">
        <div className="flipper">
          <div className="question">
            <h1>{this.props.questions.questions[0].question}</h1>
          </div>
          <div className="answer">
            <h1>{this.props.questions.questions[0].answer}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Flashcard