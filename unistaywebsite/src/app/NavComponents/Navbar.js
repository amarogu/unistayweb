'use client'
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import Logo from './Logo';
import Modal from '../GeneralUse/Modal';
import { useContext } from 'react';
import LanguageContext from '../LanguageContext';

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
    const {language} = useContext(LanguageContext); // use the context
    return (
        <nav className='flex justify-between items-center'>
            <Logo />
            <div className='flex gap-4'>
            <Modal Component={Link} text="Login" />
            <Modal Component={Link} text={language == 'English' ? "Signup" : 'Registrar'} />
                <div>
                    <DropdownMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
