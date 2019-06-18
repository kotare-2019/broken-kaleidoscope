import React from "react"

class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: this.randomHexColor(),
      }
    }
    this.randomHexColor = this.randomHexColor.bind(this)
  }
  randomHexColor = () => `#${Math.floor(Math.random() * 0x10000000)
      .toString(16)
      .padStart(6, 0)}`

    render() {
      return (
        <div style={this.state.style}></div>
      )
    }
  }

export default Pixel