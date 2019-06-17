import React from 'react'

class Pixel extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    style: { height: '50px',
         width: '50px',
         backgroundColor: 'cornflowerblue', }          
}

this.randomHexColor = this.randomHexColor.bind(this)


const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
}

randomHexColor() {
  // Hey React, please change state
  this.setState({
    backgroundColor: this.state.backgroundColor
  })
}

  render() {
   return (
    <div style={this.state.style}></div>
    )
  }
}

export default Pixel