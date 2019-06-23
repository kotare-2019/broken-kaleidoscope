import React from 'react';

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            size: 50,
            backgroundColor: 'cornflowerblue'
          }
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