import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // square: {
      //   height: "20px",
      //   width: "20px",
      //   backgroundColor: this.randomHexColor()
      // },
      backgroundColor: this.randomHexColor(),
      size: 20
    };
    this.randomHexColor = this.randomHexColor.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log(this);
    this.setState({
      // square: {
      //   height: "20px",
      //   width: "20px",
      backgroundColor: this.randomHexColor(),
      size: this.state.size * 5
      // }
    });
  }

  randomHexColor() {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`;
  }

  render() {
    console.log(this.state);
    return (
      <div
        onClick={this.clickHandler}
        style={{
          height: `${this.state.size}px`,
          width: `${this.state.size}px`,
          backgroundColor: this.state.backgroundColor
        }}
      />
    );
  }
}

export default Test;
