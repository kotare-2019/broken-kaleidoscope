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
        {Array(3000).fill(<Pixel />)}
      </div>
    )
  }
}


export default App

