import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UtilityInput from '../../UtilityCmp/UtilityInput';
import { setPosting } from '../../Store/Slice/PostSlice';
import { useDispatch, useSelector } from 'react-redux';

const DialogCmp = ({open,close}) => {
    const {Edit} = useSelector(state=>state.post)
    const [InputValue,SetInputValue] = useState("")
    const dispatch = useDispatch()
    const UploadBody = () =>{
        close()
        dispatch(setPosting({Value:InputValue,Comment:[]}))
    }
    return (
        <>
            <div>
                <Dialog
                    open={open}
                    onClose={close}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Upload Your Post"}
                    </DialogTitle>
                    <DialogContent>
                        <UtilityInput PlaceHolder={"Enter Your Post Body..."} Type={"text"} ChangeFunction={(e)=>SetInputValue(e.target.value)} Value={InputValue}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={close}>Cancel</Button>
                    <Button onClick={UploadBody} autoFocus>
                            Upload
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}

export default DialogCmp