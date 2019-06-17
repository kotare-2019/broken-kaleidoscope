import React from "react"

class OnlyJob extends React.component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        height: '70px',
        width: '80px',
        backgroundColor: 'blue',
      }
    }
  }

  render() {

    return (
      <div>
        <div style={this.state.style}>
        </div>
      </div>
    )
  }
}

// const OnlyJob = () => {

//   return (
//     <div>
//       <div style={{
//         height: '70px',
//         width: '80px',
//         backgroundColor: 'blue',
//       }}>
//       </div>
//     </div>
//   )
// }

export default OnlyJob