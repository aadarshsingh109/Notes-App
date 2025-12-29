import React, { Children } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onclick} className={`flex items-center justify-center ${props.txtclr} ${props.bgclr} ${props.fade? `fade-in` : ``} ${props.anidel? `[animation-delay:200ms]` : ``} w-10 h-10 text-2xl  rounded-full leading-0 pb-1`}>
        {props.children}
      </button> 
    </div>
  )
}

export default Button
