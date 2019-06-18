import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        {Array(50000).fill(<Pixel />)}
      </div>
    )
  }
}

export default App