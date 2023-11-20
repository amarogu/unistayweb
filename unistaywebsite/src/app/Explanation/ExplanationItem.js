'use client'
import { useContext } from 'react';
import LanguageContext from '../LanguageContext';
import Image from 'next/image';

const ExplanationItem = () => {
    const {language} = useContext(LanguageContext);
    return (
        <div className='pt-8'>
            <div className='flex gap-4'>
                <div className='flex flex-col'>
                    <div className='flex gap-3'>
                        <Image src="/problematics.svg" width={32} height={32} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExplanationItem