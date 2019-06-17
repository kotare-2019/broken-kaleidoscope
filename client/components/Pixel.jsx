import React from 'react'

const Pixel = props => {
  return (
   <div id="blue" style = {props.style}></div> 
  )
}


export default Pixel

//to change

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