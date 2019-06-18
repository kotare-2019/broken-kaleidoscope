import React from 'react'


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
  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`


  clickHandler = evt => {
    console.log("click")
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: this.randomHexColor()
      }
    })
  }

  onMouseEnter = evt => {
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'pink',
      }
    })
  }

  onContextMenu = evt => {
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'black',
      }
    })
  }

  onDoubleClick = evt => {
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'white',
      }
    })
  }

  onDragEnter = evt => {
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'yellow',
      }
    })
  }

  render() {
    return (
      // <div style={this.state.style}></div>
      <div style={this.state.style} onClick={this.clickHandler} onMouseEnter={this.onMouseEnter} onContextMenu={this.onContextMenu} onDoubleClick={this.onDoubleClick} onDragEnter={this.onDragEnter} ></div>

    )
  }

}

export default Pixel