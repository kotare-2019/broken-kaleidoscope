import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      square: {
        height: "20px",
        width: "20px",
        backgroundColor: this.randomHexColor()
      }
    };
    this.randomHexColor = this.randomHexColor.bind(this);
  }  


  randomHexColor() {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`;
  }

  render() {
    console.log(this.state);
    return <div style={this.state.square} />;
  }
}


export default Test;
