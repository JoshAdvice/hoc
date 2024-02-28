import React from 'react'
import HOC from './HOC'

const Button = (props) => {
  return (
    <div style={props.style}>
      Click Me
    </div>
  )
}

export default HOC(Button)
