'use client'
import { useContext } from 'react';
import LanguageContext from '../LanguageContext';
import ExplanationItem from './ExplanationItem';

const Explanation = () => {
    const {language} = useContext(LanguageContext);
    return (
        <div className='pt-8'>
            <h2 className="font-einaSemi max-w-[300px] sm:max-w-[280px] mx-auto">{language == "English" ? "Everything you need for your uni housing experience, all in one place" : "Tudo que você precisa para sua experiência de casitas universitárias, tudo em um só lugar" }</h2>
            <div className='flex flex-col'>
                <ExplanationItem />
            </div>
        </div>
    )
}

export default Explanation