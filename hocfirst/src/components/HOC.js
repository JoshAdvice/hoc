import React from 'react'

const HOC = (ButtonCom) => {
  return (props) => {

    console.log("P2-props", props);

    const dark = {
      background: "black",
      color: "white"
    }

    const light = {
      background: "white",
      color: "black"
    }

    return <ButtonCom style={ props.dark? dark: light } />

  }
}

export default HOC
