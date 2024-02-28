import React from 'react'

const styles = {
    dark : {
        background: 'black',
        color: 'white'
    }
}


const HOC = (WrappedComp) => {
  
  return function(args) {

    let temp = {}

    if (args.dark) {
        temp = {...styles.dark}
    }

    let obj = {...args, style: temp}

    console.log("obj", obj);

    return <WrappedComp {...obj} />

  }

}

export default HOC