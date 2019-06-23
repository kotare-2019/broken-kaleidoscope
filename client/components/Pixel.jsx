import React from 'react';

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            size: 50,
            backgroundColor: this.randomHexColor(),
          }
    }

    randomHexColor = () => {
        return `#${Math.floor(Math.random() * 0x1000000)
            .toString(16)
            .padStart(6, 0)}`;
    }

    render() { 
        return ( 
            <React.Fragment>
                <div style={{
                    height: `${this.state.size}px`,
                    width: `${this.state.size}px`,
                    backgroundColor: this.state.backgroundColor
                }}/>
            </React.Fragment>
        );
    }
}
 
export default Pixel;