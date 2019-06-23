import React from 'react';


const colors = ['#159A9A', '#399A9A', '#4A68AC', '#FFA75E', '#FF8622', '#FF5E5E', '#AE6E39', '#5A1B1B', "#274FAC", "#16223C", "#226868", '#AE8739', '#FFC95E', '#FFB522', '#AE3939']

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            size: 50,
            backgroundColor: this.colorFromArray(),
            transition: 'all ease 0.3s'
          }
    }
    handleDragEnter = () => {
        this.setState({
            backgroundColor: "#4A68AC"
        })
    }

    handleRightClick = evt => {
        evt.preventDefault()
        this.setState({
            backgroundColor: "#FFB522"
        })
    }

    clickHandler = () => {
        this.setState({
            backgroundColor: "#159A9A"
        })
    }

    colorFromArray = () => {
        return `${colors[(Math.floor(Math.random() * 15))]}`
    }

    randomHexColor = () => {
        return `#${Math.floor(Math.random() * 0x1000000)
            .toString(16)
            .padStart(6, 0)}`;
    }

    render() { 
        return ( 
            <React.Fragment>
                <div
                style={{
                    height: `${this.state.size}px`,
                    width: `${this.state.size}px`,
                    backgroundColor: this.state.backgroundColor
                }}
                onClick={this.clickHandler} 
                onDragEnter={this.handleDragEnter}
                onContextMenu={this.handleRightClick}
                />
                
            </React.Fragment>
        );
    }
}
 
export default Pixel;