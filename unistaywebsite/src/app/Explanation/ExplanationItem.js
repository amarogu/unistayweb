'use client'
import { useContext } from 'react';
import LanguageContext from '../LanguageContext';
import Image from 'next/image';

const ExplanationItem = (props) => {
    const {language} = useContext(LanguageContext);
    return (
        <div className={props.className}>
            <div className='flex flex-col gap-4 max-w-[350px] mx-auto text-left'>
                <div className='flex gap-3'>
                    <Image src={props.iconSrc} width={38} height={38} />
                    <div className='flex flex-col items-start'>
                        <p className='text-xs'>{language == 'English' ? props.data.sub.en : props.data.sub.pt}</p>
                        <p className='font-einaSemi'>{language == 'English' ? props.data.title.en : props.data.title.pt}</p>
                    </div>
                </div>
                <p>
                    {language == 'English' ? props.data.content.en : props.data.content.pt}
                </p>
                <Image src={props.imgSrc} width={250} height={0} />
            </div>
        </div>
    )
}

export default ExplanationItem