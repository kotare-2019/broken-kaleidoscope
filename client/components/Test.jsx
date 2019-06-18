import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: this.randomHexColor(),
      size: 20
    };
    this.randomHexColor = this.randomHexColor.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.doubleClick = this.doubleClick.bind(this);
    this.dragEnter = this.dragEnter.bind(this);
  }

  clickHandler() {
    console.log(this);
    this.setState({
      backgroundColor: this.randomHexColor(),
      size: this.state.size * Math.log(3)
    });
  }

  mouseEnter() {
    this.setState({
      backgroundColor: "forestgreen"
    });
  }

  rightClick = evt => {
    evt.preventDefault();
    this.setState({
      backgroundColor: "black"
    });
  };

  doubleClick() {
    this.setState({
      backgroundColor: "white"
    });
  }

  dragEnter() {
    this.setState({
      backgroundColor: "yellow"
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
        onMouseEnter={this.mouseEnter}
        onContextMenu={this.rightClick}
        onDoubleClick={this.doubleClick}
        onDragEnter={this.dragEnter}
      />
    );
  }
}

export default Test;
