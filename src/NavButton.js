import React, {Component} from 'react'
import './NavButton.css'

class NavButton extends Component {
  render() {
    return(
      <button className={`direction direction-${this.props.direction}`}>{this.props.content}</button>
    )
  }
}

export default NavButton