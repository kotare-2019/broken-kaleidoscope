import React from 'react'
import Pixel from './Pixel.jsx'

const App = () => {
  return (
    <div>
    {Array(200000).fill(<Pixel />)}
    </div>
  )   
}
  

export default App
