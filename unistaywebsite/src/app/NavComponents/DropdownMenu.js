'use client'
import { Menu, Transition } from '@headlessui/react'
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LockIcon from '@mui/icons-material/Lock';
import { useContext } from 'react';
import LanguageContext from '../LanguageContext'; // import the context
import { LanguageOutlined } from '@mui/icons-material';

function DropdownMenu() {
    const {language, setLanguage} = useContext(LanguageContext); // use the context
  return (
    <Menu>
        <Menu.Button className="outline-none">
            <MenuIcon className='text-lg' />
        </Menu.Button>
        <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <Menu.Items className="border-body-dark/30 p-5 flex backdrop-blur-sm flex-col border rounded-md mt-4 outline-none text-sm font-medium text-gray-700 bg-gradient-to-br from-gray/60 to-gray absolute -translate-x-[85%]">
                <Menu.Item className="py-2">
                    <div className='flex items-center gap-3'>
                        <a
                        className='cursor-pointer'
                        >
                        {language == 'English' ? 'Privacy' : 'Privacidade'}
                        </a>
                        <LockIcon  className='text-base'/>
                    </div>
                </Menu.Item>
                <Menu.Item className="py-2">
                    <div className='flex items-center gap-3'>
                        <a
                        className='cursor-pointer'
                        >
                        {language == 'English' ? 'Help' : 'Ajuda'}
                        </a>
                        <HelpOutlineIcon  className='text-base'/>
                    </div>
                </Menu.Item>
                <Menu.Item className="py-2">
                    <div className='flex items-center gap-3'>
                        <a
                        className='cursor-pointer'
                        >
                        {language == 'English' ? 'Features' : 'Funcionalidades'}
                        </a>
                        <LibraryBooksIcon  className='text-base'/>
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <>
                        <Menu>
                            <Menu.Button className="outline-none py-2">
                                <button className="border border-body-dark/30 bg-gray/30 py-1 px-4 shadow-sm flex items-center gap-3 rounded">
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
                                <Menu.Items className="border-body-dark/30 absolute p-5 flex backdrop-blur-sm flex-col border rounded-md outline-none text-sm font-medium text-gray-700 bg-gradient-to-br from-gray/60 to-gray">
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
                    </>
                </Menu.Item>
            </Menu.Items>
        </Transition>
    </Menu>
  )
}

export default DropdownMenu;