"use client";
// Icons and personal
import React, { Fragment, useEffect, useRef, useState } from 'react';
import CustomIcon from './icon';
import { Menu as MenuIcon, HomeOutlined as Home, NotificationsOutlined as Notification, ForumOutlined as Chats, CreditCardOutlined as Card, ExitToAppOutlined as LogOut, SettingsOutlined as Settings } from '@mui/icons-material';
import Label from './label';
import { Divider } from '@mui/material';

import { Menu, Transition } from '@headlessui/react'

const items = {
  text: ['Home', 'Notifications', 'Chats', 'Rental billing', 'Log out', 'Settings'],
  icons: [Home, Notification, Chats, Card, LogOut, Settings]
}

function SimpleMenu() {
  const [showDivider, setShowDivider] = useState(false);

  useEffect(() => {
    if (items.text.includes("Rental billing")) {
      setShowDivider(true);
    }
  }, []);
 return (
   <div className='font-einaReg'>
     
      <Menu>
        <Menu.Button className="outline-none flex items-center">
          <CustomIcon component={MenuIcon} />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >  
          <Menu.Items className=" border-body-dark/30 border rounded-md mt-2 outline-none text-sm font-medium text-gray-700 bg-gradient-to-br from-gray/60 to-gray absolute">
          {items.text.map((item, index) => {
              if (item === "Rental billing") {
                return (
                  <Fragment key={index}>
                    <Menu.Item>
                      <a>
                        <Label text={item} icon={items.icons[index]} />
                      </a>
                    </Menu.Item>
                    {showDivider && (
                      <Divider className="my-2 border-body-dark/30" />
                    )}
                  </Fragment>
                );
              } else {
                return (
                  <Menu.Item key={index}>
                    <a>
                      <Label text={item} icon={items.icons[index]} />
                    </a>
                  </Menu.Item>
                );
              }
            })}
          </Menu.Items>
        </Transition>
      </Menu>
   </div>
 )
}


export default SimpleMenu