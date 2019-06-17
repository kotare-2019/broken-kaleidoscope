import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    style: { height: '50px',
         width: '50px',
         backgroundColor: 'cornflowerblue', }
  }
}

  render() {
   return (
    <div>
      <Pixel style={this.state.style}/>
    
    </div>
    )
  }
}

export default App
