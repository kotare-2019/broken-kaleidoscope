import React from 'react'

class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                fontFamily: 'Times New Roman',
                height: '20px',
                width: '20px',
                backgroundColor: this.randomHexColor()
            }
        }

        this.randomHexColor = this.randomHexColor.bind(this) 
        
    }

    randomHexColor = () => {
        return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    }

    clickHandler = evt => {
        this.setState({
           style: {
            height: '20px',   
            width: '20px',
            backgroundColor: this.randomHexColor()
           }
        })
      }

    render() {
        return (
            <div style={this.state.style} onClick={this.clickHandler}>
            </div>
        )
    }
}

export default Pixel