

import React from 'react'

const Button = (props) => {
    const { children } = props;
  return (
    <button className={props.className}> { children} </button>
  )
}

export default Button