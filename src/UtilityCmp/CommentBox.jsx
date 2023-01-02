import React, { useState } from 'react'
import UtilityLogo from './UtilityLogo'
import EditDeleteCmp from '../Components/editDeleteCmp'
import { AiOutlineDown } from 'react-icons/ai';
import { CommentDelete } from '../Store/Slice/PostSlice';
import { useDispatch } from 'react-redux';

const CommentBox = ({ comment ,id}) => {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);
    const open2 = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl(null);
    };
    const DeleteComment =()=>{
        dispatch(CommentDelete(id))
    }
    return (
    <>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"10px 5px 10px 5px",backgroundColor:"whitesmoke",padding:"2px",borderRadius:"10px"}}>
        <div style={{display:"flex"}}>
            <UtilityLogo mark={"G"} />
            <div>
            <div style={{fontWeight:"bolder"}}>{"Ghulam Yaseen"}</div>
            <div style={{fontSize:"12px"}} >{comment}</div>
            </div>
        </div>
        <div onClick={handleClick} style={{cursor:"pointer"}}><AiOutlineDown/></div>
    </div>
    <EditDeleteCmp anchor={anchorEl}  open={open2} close={handleClose2} Del={DeleteComment}
    />
    </>
    )
}

export default CommentBox