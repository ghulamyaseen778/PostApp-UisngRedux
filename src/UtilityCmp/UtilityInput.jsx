import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'
import {GrEmoji} from 'react-icons/gr'

const UtilityInput = ({Type,PlaceHolder,ChangeFunction,Value,KEY}) => {
    const [isActive,SetisActive] =useState(false)
    // const [InputVal,SetInputVal] = useState(Value)
    const styleObject = {
        width:"400px",
        border:"none",
        padding:"4px",
        paddingLeft:"10px",
        backgroundColor:"rgb(244, 240, 240)",
        borderRadius: "15px",
        outline:"none",
        fontSize:"16px",
        color:"gray",
    }

    const PreventDefault = (e) =>{
        e.preventDefault()
        console.log("hello")
        console.log(Value,KEY)
    }
    return (
        <>
        <form onSubmit={PreventDefault} style={{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
        <input type={Type} placeholder={PlaceHolder} onChange={ChangeFunction} style={styleObject}/>
        <div style={{fontSize:"23px",position:"absolute",right:"9px", marginTop:"2px",cursor:"pointer"}}><GrEmoji onClick={()=>SetisActive(true)}/></div>
        </form>
        
        </>
    )
}

export default UtilityInput