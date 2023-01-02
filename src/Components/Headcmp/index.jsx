import React, { useState } from 'react'
import LogoCmp from '../../UtilityCmp/UtilityLogo'
import {BsLockFill} from 'react-icons/bs'
import {AiOutlineDown} from 'react-icons/ai'
import EditDeleteCmp from '../editDeleteCmp'

const HeadCmp = ({Delete}) => {
  const [anchorEl, setAnchorEl] =useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex"}}>
            <LogoCmp mark={"G"} />
            <div>
            <div style={{fontWeight:"bolder"}}>{"Ghulam Yaseen"}</div>
            <div style={{fontSize:"12px"}} >{"Just Now"} <BsLockFill/></div>
            </div>
        </div>
        <div onClick={handleClick} style={{cursor:"pointer"}}><AiOutlineDown/></div>
    </div>
    <EditDeleteCmp anchor={anchorEl}  open={open2} close={handleClose2}
    Del={()=>{
        Delete()
        handleClose2()
    }}/>
    
    </>
  )
}

export default HeadCmp