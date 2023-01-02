import React, { useState } from 'react'
import LikeCommentCmp from '../Soical'
import HeadCmp from '../Headcmp'
import PostBodyCmp from '../PostBody'
import UtilityLogo from '../../UtilityCmp/UtilityLogo'
import CommentInput from '../../UtilityCmp/UtilityCommentInput'
import EditDeletCmp from '../editDeleteCmp'
import { useSelector,useDispatch } from 'react-redux'
import { PostDelete, SetDialog } from '../../Store/Slice/PostSlice'
import CommentBox from '../../UtilityCmp/CommentBox'

const CardCmp = () => {
  const {Dialog} = useSelector(state=>state.post)
  const dispatch = useDispatch()
  const {Post} = useSelector(state=>state.post)
  // console.log(POST)
  const DeleteHandler = (key) =>{
      dispatch(PostDelete(key))
  }
  
  return (
    <>
    {
      Post.map((Post,key)=>{
        console.log(Post)
        return (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px",width:"100%" }} key={key}>
          <div style={{ backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", width: "30rem", borderRadius: "10px", padding: "10px" }}>
          <HeadCmp Delete={()=>DeleteHandler(key)} />
          <PostBodyCmp text={Post.Value}/>
          <LikeCommentCmp comment={Post.Comment}/>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <div style={{width:"100%"}}>
             {
              Post.Comment.map((com,Key)=>{
                return(
                  <CommentBox key={Key} comment={com} id={key}/>
                )
              })
             }
            </div>
          <div style={{display:"flex",alignItems:"center"}}>
          <UtilityLogo mark={"G"}/>
          <CommentInput Type={"text"} PlaceHolder={"Write Your Comment..."} KEY={key}/>
          </div>
          </div>
          </div>
        </div>
        )
      })
    }

    </>
  )
}

export default CardCmp