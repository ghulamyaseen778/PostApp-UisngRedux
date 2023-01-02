import React, { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const EditDeleteCmp = ({anchor,open,Edit,Del, close}) => {
  
  return (
    <div>
    <Menu
      id="basic-menu"
      anchorEl={anchor}
      open={open}
      onClose={close}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={Edit}>Edit</MenuItem>
      <MenuItem onClick={Del}>Delete</MenuItem>
    </Menu>
  </div>

  )
}

export default EditDeleteCmp