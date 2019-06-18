import React from 'react'

// const randomHexColor = () =>
//   `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                fontFamily: 'Times New Roman',
                height: '100px',
                width: '100px',
                backgroundColor: this.randomHexColor()
            }
        }

        this.randomHexColor = this.randomHexColor.bind(this) 
        
    }

    randomHexColor = () => {
        return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    }

        

    // randomHexColor = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    render() {
        return (
            <div style={this.state.style}>
            </div>
        )
    }
}

export default Pixel