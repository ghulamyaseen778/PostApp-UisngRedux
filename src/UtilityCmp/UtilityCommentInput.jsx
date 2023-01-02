import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'
import {GrEmoji} from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { setComment } from '../Store/Slice/PostSlice'

const CommentInput = ({Type,PlaceHolder,KEY}) => {
    const Dispatch = useDispatch()
    const [isActive,SetisActive] =useState(false)
    const [InputVal,SetInputVal] = useState("")
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
        console.log(InputVal,KEY)
        Dispatch(setComment({Key:KEY,Comment:InputVal}))
        SetInputVal("")
    }
    return (
        <>
        <form onSubmit={PreventDefault} style={{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
        <input type={Type} placeholder={PlaceHolder} onChange={(e)=>SetInputVal(e.target.value)} style={styleObject} value={InputVal}/>
        <div style={{fontSize:"23px",position:"absolute",right:"9px", marginTop:"2px",cursor:"pointer"}}><GrEmoji onClick={()=>SetisActive(true)}/></div>
        </form>
        
        </>
    )
}

export default CommentInput