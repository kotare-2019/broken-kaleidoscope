import React from 'react'


const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
// console.log(randomHexColor())


class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: randomHexColor()
      }
    }

    this.clickHandler = this.clickHandler.bind(this)
    this.mouseHover = this.mouseHover.bind(this)

  }

  mouseHover = () => {
    this.setState({
      style: {
        width: '10px',
        height: '10px',
        backgroundColor: randomHexColor()
      }
    })
  }

  clickHandler = () => {
    this.setState({
      style: {
        width: '15px',
        height: '15px',
        backgroundColor: randomHexColor()
      }
    })
  }
  render() {
    return (
      <div style={this.state.style} onMouseEnter={this.mouseHover} ></div>

    )

  }
}

export default Pixel