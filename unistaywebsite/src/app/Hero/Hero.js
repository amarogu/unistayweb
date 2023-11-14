'use client';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Button from '../GeneralUse/Button';
import Input from '../GeneralUse/Input';
import Modal from '../GeneralUse/Modal';
import PlaceholderInput from '../GeneralUse/PlaceholderInput';

const Hero = () => {
    return (
        <section className='py-8 flex items-center flex-col gap-12'>
            <div className='flex flex-col gap-6 items-center'>
                <div className='flex flex-col items-center sm:flex-row gap-1 sm:gap-6 sm:justify-center text-5xl sm:text-6xl font-einaSemi'>
                    <h1 className=''>Find a</h1>
                    <div className='bg-accent w-fit'>
                        <Typewriter
                            options={{
                                strings: ['Place', 'House', 'Room', 'Home'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                <p className='max-w-[260px] sm:max-w-[400px] text-center text-body-dark'>With UniStay you can easily find housing options for your university season, roomates to connect with and more. </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Modal Component={Button} text='Get started' />
                    <Modal Component={PlaceholderInput} placeholder='Search for a place' />
                </div>
            </div>
            <Image src='/hero@2x.png' className='max-w-[800px] sm:max-w-full' alt="Illustration" width={3112} height={1535} />
        </section>
    )
}

export default Hero;