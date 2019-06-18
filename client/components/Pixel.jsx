import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        width: 25,
        height: 25,
        backgroundColor: randomHexColor(),
      }
    }
  }

  randomHexColor() {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }
  clickHandler = evt => {
    console.log('clicked')
    this.setState({
      style: {
        width: 25,
        height: 25,
        backgroundColor: randomHexColor(),
      }
    })
  }
  onDragEnter = evt => {
    this.setState({
      style: {
        width: 25,
        height: 25,
        backgroundColor: 'green',
      }
    })
  }

  onContextMenu = (evt) => {
    evt.preventDefault()
    this.setState({
      style: {
        width: 25,
        height: 25,
        backgroundColor: 'black',
      }
    })
  }
  onDoubleClick = (evt) => {
    evt.preventDefault()
    this.setState({
      style: {
        width: 25,
        height: 25,
        backgroundColor: 'white',
      }
    })
  }
  render() {
    return (
      <div style={this.state.style} onClick = {this.clickHandler} onDragEnter = {this.onDragEnter} onContextMenu = {this.onContextMenu} onDoubleClick = {this.onDoubleClick}></div>
    ) 
  }



}


export default Pixel