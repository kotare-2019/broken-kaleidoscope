import React from 'react'
import Pixel from './pixel'



const App = () => {
  // return [
  // <Pixel />,
  // <Pixel />,
  // <Pixel />,
  // <Pixel />
  // ]
  
  return Array.from( { length: 100000 }, () => <Pixel />
  )
}
  
export default App
