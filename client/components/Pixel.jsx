import React from 'react';

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            size: 50,
            backgroundColor: this.randomHexColor(),
            transition: 'all ease 0.3s'
          }
    }
    handleDragEnter = () => {
        this.setState({
            backgroundColor: "#103636"
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