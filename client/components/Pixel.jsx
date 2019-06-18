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
        backgroundColor: randomHexColor(),
      }
    })
  }
  render() {
    return (
      <div style={this.state.style} onClick = {this.clickHandler}></div>
    ) 
  }



}


export default Pixel