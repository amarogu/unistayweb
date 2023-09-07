"use client";
// Icons and personal
import React, { useState } from 'react';
import CustomIcon from './icon';
import { Menu as MenuIcon, HomeOutlined as Home, NotificationsOutlined as Notification, ForumOutlined as Chats, CreditCardOutlined as Card } from '@mui/icons-material';
import Label from './label';

// MUI
import {Button} from '@mui/base/';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className='dark:text-body-dark-emphasized hover:bg-transparent'>
        <CustomIcon component={MenuIcon} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
            style: {
                backgroundColor: 'linear-gradient(to bottom, #1E293B99, ##1E293BFF)',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: '#000'
            },
          }}
      >
        {items.text.map((item, index) => {
                    return (
                        
                            <MenuItem onClick={handleClose} key={index} className='text-body-dark-emphasized' >
                                <Label text={item} icon={items.icons[index]} />
                            </MenuItem>
                        
                    )
                })
            }
      </Menu>
    </div>
  );
}

const items = {
    text: ['Home', 'Notifications', 'Chats', 'Rental billing'],
    icons: [Home, Notification, Chats, Card]
}
