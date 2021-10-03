import React from 'react'
import  "./Button.css"


function Button({type,onclick}) {

  return (
    <button 
    className={type}  
    onClick={onclick}
    >
    {type}
    </button>
  )
}

export default Button
