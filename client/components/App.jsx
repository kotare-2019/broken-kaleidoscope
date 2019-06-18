import React from "react";
import Test from "./Test";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        {Array.from({ length: 200 }, (v, i) => {
          // console.log(v);//the value of v will be undefined - we don't know what v is....
          // console.log(i);
          return <Test key={i} />;
        })}
      </div>
    );
  }
}

// handleClick() {
//   // Hey React, please change state
//   this.setState({
//     count: this.state.count + 1
//   })
// }

export default App;
