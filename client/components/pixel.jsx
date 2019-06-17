import React from 'react'

function Pixel(props) {
    return (
        <div>
            <div style={{
                backgroundColor: 'aqua',
                 height: '20px',
                 width: '20px'
            }}>
             </div>
        </div>
    )
}


 export default Pixel

// class Pixel extends React.component {
//     constructor(props) {
//         super(props)
//     }
// }


// render() {
//     return (
//         {this.state.style(pixColor => {
//             return (
//                 {pixColor}
//             )
//         })}
//     )
// }