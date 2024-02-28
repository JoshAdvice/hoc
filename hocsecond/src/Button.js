import React from 'react'
import HOC from './HOC'

const Button = (props) => {

  console.log("P2-props", props);

  return (
    <div style={props.style}>
      Hello...
    </div>
  )
  
}

export default HOC(Button);