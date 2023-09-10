"use client";
// Icons and personal
import React, { Fragment, useEffect, useRef, useState } from 'react';
import CustomIcon from './icon';
import Label from './label';
import { Divider } from '@mui/material'; 

import { Menu, Transition } from '@headlessui/react'
import SearchBar from './searchBar';



function SimpleMenu(props) {
  const items = {
    text: props.text,
    icons: props.icons
  };
  const Button = props.button;
  const ButtonOpen = props.buttonOpen;
  const [showDivider, setShowDivider] = useState(false);
  const {onSelect} = props;
  const menu = props.menu;

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
              <CustomIcon component={open ? ButtonOpen : Button} />
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
              <Menu.Items className=" border-body-dark/30 backdrop-blur-sm border rounded-md mt-4 outline-none text-sm font-medium text-gray-700 bg-gradient-to-br from-gray/60 to-gray absolute -translate-x-[85%]">
              {items.text.map((item, index) => {
                  if (item === "Rental billing") {
                    return (
                      <Fragment key={index}>
                        <Menu.Item>
                          <a>
                            <Label text={item} icon={items.icons[index]} order={false} measures="my-4 pl-4 pr-10" textProperties="text-sm whitespace-nowrap" />
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
                        <a onClick={() => onSelect(index)}>
                          <Label text={item} icon={items.icons[index]} order={false} measures="my-4 pl-4 pr-10" textProperties="text-sm whitespace-nowrap" />
                        </a>
                      </Menu.Item>
                    );
                  }
                })}
                {menu ? (<SearchBar menu={true} />) : null}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
   </div>
 )
}


export default SimpleMenu