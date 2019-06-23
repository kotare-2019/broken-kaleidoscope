import React from 'react'
import Pixel from './Pixel'


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() { 
    return (
    <React.Fragment>
      {Array.from({length: 798}, (v, i) => {
        return <Pixel key={i} />
      })} 
    </React.Fragment>
    );
  }
}



export default App
