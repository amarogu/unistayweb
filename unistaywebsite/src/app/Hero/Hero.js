'use client';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Button from '../GeneralUse/Button';
import Input from '../GeneralUse/Input';
import Modal from '../GeneralUse/Modal';
import PlaceholderInput from '../GeneralUse/PlaceholderInput';
import { useContext } from 'react';
import LanguageContext from '../LanguageContext';

const Hero = () => {
    const {language} = useContext(LanguageContext);
    return (
        <section className='py-8 flex items-center flex-col gap-12'>
            <div className='flex flex-col gap-6 items-center'>
                <div className='flex flex-col items-center sm:flex-row gap-1 sm:gap-6 sm:justify-center text-5xl sm:text-6xl font-einaSemi'>
                    <h1 className='text-center'>{language == 'English' ? 'Find a' : 'Encontre um(a)'}</h1>
                    <div className='bg-accent w-fit'>
                        <Typewriter
                            options={{
                                strings: [language == 'English' ? 'Place' : 'Lugar', language == 'English' ? 'House' : 'Casa', language == 'English' ? 'Room' : 'Quarto', language == 'English' ? 'Home' : 'Lar'],
                                autoStart: true,
                                loop: true,
                                cursorClassName: '-z-index-[1]'
                            }}
                        />
                    </div>
                </div>
                <p className='max-w-[260px] sm:max-w-[400px] text-center text-body-dark'>{language == "English" ? "With UniStay you can easily find housing options for your university season, roomates to connect with and more." : "Com UniStay você consegue facilmente encontrar opções de alojamento para seu período universitário, colegas de quarto e mais."}</p>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Modal Component={Button} text={language == 'English' ? 'Get started' : 'Começar'} />
                    <Modal Component={PlaceholderInput} placeholder={language == 'English' ? 'Search for a place' : 'Busque um lugar'} />
                </div>
            </div>
            <Image src='/hero@2x.png' className='max-w-[800px] sm:max-w-full' alt="Illustration" width={3112} height={1535} />
        </section>
    )
}

export default Hero;