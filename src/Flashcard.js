import React, { Component } from 'react'
import './Flashcard.css'

class Flashcard extends Component {

  render() {
    return (
      <div className="flashcard">
        <div className="flipper" ontouchstart="">
          <div className="card-content question">
            <h2>{this.props.questions.questions[0].question}</h2>
          </div>
          <div className="card-content answer">
            <h2>{this.props.questions.questions[0].answer}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Flashcard