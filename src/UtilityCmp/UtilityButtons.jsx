import React from 'react'
import '../App.css'

const UtilityButtons = ({text,icon,Onclick}) => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div onClick={Onclick} className='hoverBtn' style={{padding:"10px",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div>{icon}</div>
          {text}</div>
    </div>
    )
}

export default UtilityButtons