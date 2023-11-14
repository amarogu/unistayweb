'use client';
import Button from '../GeneralUse/Button';
import Image from 'next/image';
import Modal from '../GeneralUse/Modal';
import { useContext } from 'react';
import LanguageContext from '../LanguageContext'; // import the context

const About = () => {
    const {language} = useContext(LanguageContext); // use the context
    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="font-einaSemi max-w-[300px] sm:max-w-[200px]">
                {language === 'English' ? 'We are all about helping you to find your unistay' : 'Estamos aqui para te ajudar a encontrar a sua casa'}
            </h2>
            <p className="max-w-[400px] font-einaReg text-body-dark">{language == 'English' ? "Create an account. Search locations, universities, accommodation types and more. Find your place" : "Crie uma conta. Busque por localizações, universidades, acomodações e mais. Encontre seu lugar."}</p>
            <Modal Component={Button} text={language == 'English' ? "Find" : "Encontrar"} />
            <div className='sm:hidden'>
                <Image src='/aboutmobile.png' className='mt-10 max-w-[300px]' width={800} height={1822} />
            </div>
            <div className='hidden sm:block'>
                <Image src='/aboutlg.png' className='mt-10 max-w-[600px]' width={800} height={1822} />
            </div>
        </div>
    )
}

export default About