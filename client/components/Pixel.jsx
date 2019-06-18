import React from "react"

const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000)
  .toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        height: '2px',
        width: '2px',
        backgroundColor: randomHexColor(),
      }
    }
  }
  render() {
    return (
      <div onclick={this.clickHandler} style={this.state.style}></div>
    )
  }

  clickHandler = evt => {
    console.log('click')
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: this.randomHexColor()
      }
    })
  }
}

export default Pixel
