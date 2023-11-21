'use client'
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import Logo from './Logo';
import Modal from '../GeneralUse/Modal';
import { useContext } from 'react';
import LanguageContext from '../LanguageContext';
import { Menu, Transition } from '@headlessui/react';
import { LanguageOutlined } from '@mui/icons-material';

const Navbar = () => {
    const Link = ({ onClick, text }) => (
        <button
          type="button"
          onClick={onClick}
          className="underline"
        >
          {text}
        </button>
      );
    const {language, setLanguage} = useContext(LanguageContext); // use the context
    return (
        <nav className='flex justify-between items-center relative'>
            <Logo />
            <div className='flex gap-4'>
            <Modal Component={Link} text="Login" />
            <Modal Component={Link} text={language == 'English' ? "Signup" : 'Registrar'} />
            <div>
            <Menu>
                <Menu.Button className="outline-none">
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
                    <Menu.Items className="border-body-dark/30 absolute p-5 mt-2 flex backdrop-blur-sm flex-col border rounded-md outline-none text-sm font-medium text-gray-700 bg-gradient-to-br from-gray/60 to-gray">
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
            </div>
                <div>
                    <DropdownMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
