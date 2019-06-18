import React from 'react'

const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                backgroundColor: randomHexColor(),
                height: '1px',
                width: '1px',
            }
        }
    }

    clickHandler = evt => {
        this.setState({
            style: {
                backgroundColor: randomHexColor(),
                height: '1px',
                width: '1px',
            }
        })
    }
    onMouseEnter = evt => {
        this.setState({
            style: {
                backgroundColor: 'green',
                height: '1px',
                width: '1px',
            }
        })
    }
    onContextMenu = evt => {
       
        this.setState({
            style: {
                backgroundColor: 'black',
                height: '1px',
                width: '1px',
            }
        })
    }
    onDoubleClick= evt => {
        this.setState({
            style: {
                backgroundColor: 'white',
                height: '1px',
                width: '1px',
            }
        })
    }   
    onDragEnter= evt => {
         evt.preventDefault()
        this.setState({
            style: {
                backgroundColor: 'yellow',
                height: '1px',
                width: '1px',
            }
        })
    } 
    
    render() {
        return (
            <div style={this.state.style} onClick={this.clickHandler} onMouseEnter={this.onMouseEnter} onContextMenu={this.onContextMenu} onDoubleClick={this.onDoubleClick} onDragEnter={this.onDragEnter}></div>
        )
    }
}



export default Pixel

