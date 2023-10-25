'use client';
import Button from '../GeneralUse/Button';
import Image from 'next/image';

const About = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="font-einaSemi max-w-[300px] sm:max-w-[200px]">We are all about helping you to find your unistay</h2>
            <p className="max-w-[400px]">Create an account. Search locations, universities, accommodation types and more. Find your place.</p>
            <Button text='Find' onClick={() => {}} />
            <Image src='/aboutmobile.png' className='mt-10 max-w-[300px]' width={800} height={1822} />
        </div>
    )
}

export default About