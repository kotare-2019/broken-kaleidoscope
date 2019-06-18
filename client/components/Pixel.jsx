import React from 'react'


class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
      style: {
        height: '3px',
        width: '3px',
        backgroundColor: this.randomHexColor(),
      }
    }
    this.randomHexColor = this.randomHexColor.bind(this)
  }
  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`

  render() {
    return (
      <div onClick={this.clickHandler} style={this.state.style}></div>
    )
  }
  clickHandler = evt => {
    console.log('click')
    this.setState({
      style: {
        height: '5px',
        width: '5px',
        backgroundColor: this.randomHexColor()
      }
    })
  }
}

export default Pixel