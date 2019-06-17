import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                backgroundColor: randomHexColor(),
                height: '20px',
                width: '20px'
            }
        }
        
    }
    // clickHandler =evt => {
    //     this.setState({
    //         clickHandler = onClick.click.bind 
    //     })
    // }

    render() {
       
        return (
            <div>
                <div style={this.state.style}>
                </div>
            </div>
        )
    }
}

export default Pixel

