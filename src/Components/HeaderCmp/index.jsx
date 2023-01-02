import React, { useState } from 'react'
import UtilityButtons from '../../UtilityCmp/UtilityButtons'
import UtilityInput from '../../UtilityCmp/UtilityInput'
import UtilityLogo from '../../UtilityCmp/UtilityLogo'
import {BiMessageSquareAdd} from 'react-icons/bi'
import {AiOutlineFileProtect} from 'react-icons/ai'
import {TbPhoto} from 'react-icons/tb'
import DialogCmp from '../Dialog'
import { useDispatch, useSelector } from 'react-redux'
// import { SetDialog } from '../../Store/Slice/PostSlice'
const HeaderCmp = () => {
  // const {Dialog} = useSelector(state=>state.post)
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()

  const handleClickOpen = () => {
      setOpen(true);
      // dispatch(SetDialog({bool:true,value:""}))
  };

  const handleClose = () => {
      setOpen(false);
      // dispatch(SetDialog({bool:false,value:""}))
  };
  return (
    <>
    <div style={{display:"flex",justifyContent:"center", marginTop:"10px"}}>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:"white",padding:"10px",height:"6rem",width:"30rem",borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",flexDirection:"column"}}>
    <div style={{display:"flex",alignItems:"center"}}><UtilityLogo mark={"G"}/>
    <UtilityInput Type={"text"} PlaceHolder={"What's On Your Mind, Ghulam?"} ChangeFunction={(e)=>console.log(e.target.value)}/></div>
    <hr style={{width:"100%"}} />
    <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
    <UtilityButtons text={"Protected"} icon={<AiOutlineFileProtect color='red' fontSize={20}/>}/>
    <UtilityButtons text={"Photos"} icon={<TbPhoto color='blue'  fontSize={20}/>}/>
    <UtilityButtons text={"Add Post"}icon={<BiMessageSquareAdd color='green' fontSize={20}/>} Onclick={handleClickOpen}/>
    </div>
    </div>
    </div>
    <DialogCmp open={open} close={handleClose}/>
    </>
  )
}

export default HeaderCmp