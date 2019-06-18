import React from 'react'

class Pixel extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    style: { height: '40px',
         width: '40px',
         backgroundColor: this.randomHexColor(), }          

  }
this.randomHexColor = this.randomHexColor.bind(this)

  }

  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

clickHandler = evt => {
  // Hey React, please change state
  this.setState({
    style: {
    height: '18px',
    width: '18px',  
    // backgroundColor: this.randomHexColor(),
    backgroundColor: 'fuchsia',
    }
  })
}

  render() {
   return (
    <div style={this.state.style} onMouseEnter={this.clickHandler}></div>
    
    )
  }
}

export default Pixel