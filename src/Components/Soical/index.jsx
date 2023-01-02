import React, { useState } from 'react'
import {AiFillLike,AiOutlineLike} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {IoMdShareAlt} from 'react-icons/io'

const LikeCommentCmp = ({comment , onClick}) => {
    const [Like,SetLike] = useState(false)
    const [Value,SetValue] = useState("0")
    const LikeEvent=()=>{
        SetLike(!Like)
        if (!Like){
            SetValue("1")
        }
        else{
            SetValue("0")
        }
    }
  return (
    <>
    <div style={{display:"flex",flexDirection:"column"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <div style={{fontSize:"12px"}}><AiFillLike/>{Value}</div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{fontSize:"12px",marginRight:"5px"} } onClick={onClick}>{comment.length} comment</div>
            <div  style={{fontSize:"12px"}}>{"0"} share</div>
        </div>
    </div>
    <hr style={{width:"100%"}} />
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        {!Like? <div className='hoverBtn' style={{padding:"3px 5px",borderRadius:"2px"}}onClick={LikeEvent}><AiOutlineLike/> Like</div>:<div className='hoverBtn' style={{padding:"3px 5px",borderRadius:"2px" , color:"blue"}}onClick={LikeEvent}><AiOutlineLike/> Like</div>}
        <div className='hoverBtn' style={{padding:"3px 5px",borderRadius:"2px"}}><FaRegComment/> Comment</div>
        <div className='hoverBtn' style={{padding:"3px 5px",borderRadius:"2px"}}><IoMdShareAlt/> Share</div>
    </div>
    <hr style={{width:"100%"}} />
    </div>
    </>
    )
}

export default LikeCommentCmp