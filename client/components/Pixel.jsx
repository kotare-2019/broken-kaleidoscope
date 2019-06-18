import React from 'react'

// Why do we place this outside the component?

// const randomHexColor = () =>
// `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            style: {
                height: "30px",
                width: "30px",
                backgroundColor: this.randomHexColor()
            }
        }
        // this.clickHandler = this.clickHandler.bind(this)
        this.mouseOver = this.mouseOver.bind(this)
    }

    randomHexColor = () => {
        return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    }

    // colorShift = () => {
    //     setInterval( () => {this.setState.backgroundColor = this.randomHexColor()}, 500 )
    // }

    // setInterval ( doSomething(), 5000 );

    // function doSomething ( )
    // {
    //     {this.setState.backgroundColor = this.randomHexColor()}, 500 )
    // }

    clickHandler = (evt) => {
        this.setState({
          style: {
              height: "30px",
              width: "30px",
              backgroundColor: this.randomHexColor()
          }
        })
    }

    mouseOver() {
        this.setState({
            style: {
                height: "30px",
                width: "30px",
                // transform: "rotate(90deg)",
                transition: "all 1s ease-in-out",
                // borderRadius: "50%",
                backgroundColor: this.randomHexColor()
            }
        })
    }


    render() {
        return (
            <div style={this.state.style} 
                    onMouseOver={this.mouseOver} 
                    onClick={this.clickHandler}
                >

            </div>
        )
    }

}

export default Pixel