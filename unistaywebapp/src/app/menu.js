"use client";
// Icons and personal
import React, { Fragment, useEffect, useRef, useState } from 'react';
import CustomIcon from './icon';
import Label from './label';
import { Divider } from '@mui/material';
import {Menu as MenuIcon, Close} from '@mui/icons-material'; 

import { Menu, Transition } from '@headlessui/react'



function SimpleMenu(props) {
  const items = {
    text: props.text,
    icons: props.icons
  };
  const [showDivider, setShowDivider] = useState(false);

  useEffect(() => {
    if (items.text.includes("Rental billing")) {
      setShowDivider(true);
    }
  }, []);
 return (
   <div className='font-einaReg'>
     
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="outline-none flex items-center">
              <CustomIcon component={open ? Close : MenuIcon} />
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
              <Menu.Items className=" border-body-dark/30 border rounded-md mt-4 outline-none text-sm font-medium text-gray-700 bg-gradient-to-br from-gray/60 to-gray absolute -translate-x-[85%]">
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
          </>
        )}
      </Menu>
   </div>
 )
}


export default SimpleMenu