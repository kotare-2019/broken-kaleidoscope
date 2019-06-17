import React from 'react'
import Pixel from './Pixel.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      }
      
  }
  
  render() {
    return (
      <div>
        <div>React development has begun!</div>
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
      </div>
    )
  }
}


export default App

