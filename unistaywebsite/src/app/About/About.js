'use client';
import Button from '../GeneralUse/Button';
import Image from 'next/image';
import Modal from '../GeneralUse/Modal';

const About = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="font-einaSemi max-w-[300px] sm:max-w-[200px]">We are all about helping you to find your unistay</h2>
            <p className="max-w-[400px] font-einaReg text-body-dark">Create an account. Search locations, universities, accommodation types and more. Find your place.</p>
            <Modal Component={Button} text="Find" />
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