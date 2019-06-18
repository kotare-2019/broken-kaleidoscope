import React from 'react'


const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


const width = "50px"
const height = width

class Pixel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            style: {
                width,
                height,
                backgroundColor: randomHexColor()
            }
        }
    }
    clickHandler = evt => {
        this.setState({
            style: {
                width,
                height,
                backgroundColor: randomHexColor()
            }
        })
    }
    onMouseEnter = evt =>{
        this.setState({
            style: {
                width,
                height,
                backgroundColor: randomHexColor()
            }
        })
    }

    onDoubleClick = evt => {
        this.setState({
            style: {
                width,
                height,
                backgroundColor: 'white'
            }
        })
    }

    onDragEnter = evt =>{
        this.setState({
            style: {
                width,
                height,
                backgroundColor: 'purple'
            }
        })
    }

    render(){
        const {style} = this.state
        return (
            <div onClick = {this.clickHandler}
            onMouseEnter = {this.onMouseEnter}
            onDoubleClick = {this.onDoubleClick}
            onDragEnter = {this.onDragEnter}
             style = {style}></div>
          )
    }
}

  

export default Pixel