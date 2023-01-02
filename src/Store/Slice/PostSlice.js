import { Dialog } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: false,
    Post:[],
    Dialog:{},
    Edit:false
}

const PostingSlice = createSlice({
    name: "Posting",
    initialState: initialState,
    reducers:{
        
        setPosting: (state, { payload }) => {
            state.Edit=false
            state.error = false
            state.Post = [payload,...state.Post]
        },
        setComment:(state,{payload})=>{
            state.error=false
            state.Post[payload.Key].Comment= [payload.Comment,...state.Post[payload.Key].Comment]
        },
        PostDelete:(state,{payload})=>{
            state.Post.splice(payload,1)
        },
        CommentDelete:(state,{payload})=>{
            state.Post[payload].Comment.splice(payload,1)
        },
    }
})

export const {setPosting,setComment,PostDelete,CommentDelete} = PostingSlice.actions
export default PostingSlice.reducer