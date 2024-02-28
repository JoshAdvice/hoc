import React from 'react'

const Button = (props) => {

  console.log("P2-props", props);

  return (
    <div style={props.style}>
      Hello...
    </div>
  )
  
}

export default Button
