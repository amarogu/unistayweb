'use client'
import Button from "../GeneralUse/Button";
import Logo from "../NavComponents/Logo";
import { Menu, Transition } from '@headlessui/react'
import { useState } from "react";
import { Language, LanguageOutlined } from "@mui/icons-material";
import Modal from "../GeneralUse/Modal";
import React, { useContext } from 'react';
import LanguageContext from '../LanguageContext'; // import the context

const Footer = () => {
    const { language, setLanguage } = useContext(LanguageContext); // use the context
  return (
    <div>
      <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row text-center sm:text-left items-center sm:items-start justify-between">
        <div className="flex flex-col gap-3">
            <Logo />
            <Menu>
                <Menu.Button className="outline-none" onClick={() => setTimeout(() => window.scrollTo(0,document.body.scrollHeight), 300)}>
                    <button className="border border-gray bg-gray/30 py-1 px-4 flex items-center gap-3 rounded">
                        <LanguageOutlined className='text-sm'/>
                        <p>
                        {language}
                        </p>
                    </button>
                </Menu.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Menu.Items className="border-body-dark/30 p-5 flex backdrop-blur-sm flex-col border rounded-md mt-4 outline-none text-sm font-medium text-gray-700 bg-gradient-to-br from-gray/60 to-gray">
                        <Menu.Item className="py-2">
                            <div className='flex items-center gap-3'>
                                <a
                                onClick={() => setLanguage('English')}
                                className="cursor-pointer"
                                >
                                English
                                </a>
                                
                            </div>
                        </Menu.Item>
                        <Menu.Item className="py-2">
                            <div className='flex items-center gap-3'>
                                <a
                                onClick={() => setLanguage('Português')}
                                className="cursor-pointer"
                                >
                                Português
                                </a>
                                
                            </div>
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
            <p className="text-body-dark text-xs">
                © 2021 UniStay.
            </p>
            <p className="text-body-dark text-xs">
            All rights reserved.
            </p>
        </div>
        <div className="flex flex-col gap-3 text-body-dark">
            <p className="font-einaSemi text-body-dark-emphasized">Our application</p>
            <Modal Component={({onClick}) => {return(
                <a onClick={onClick} className="cursor-pointer">Web app</a>
            )}} title="Work in progress" description="This feature is a work in progress and is not available yet." />
            <Modal Component={({onClick}) => {return(
                <a onClick={onClick} className="cursor-pointer">iOS app</a>
            )}} title="Request access" description="To request access to the application get in contact with Gustavo :)" />
        </div>
        <div className="flex flex-col gap-3 text-body-dark">
            <p className="font-einaSemi text-body-dark-emphasized">Your privacy</p>
            <Modal Component={({onClick}) => {
                return(
                    <a onClick={onClick} className="cursor-pointer">Privacy policy</a>
                )
            }} title="Work in progress" description="The privacy policy is being written. As soon as it is ready it will be updated here." />
        </div>
      </div>
    </div>
  );
};

export default Footer;
