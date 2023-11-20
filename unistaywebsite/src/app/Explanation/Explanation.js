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
                <ExplanationItem iconSrc="/problematics.svg" imgSrc="/problematics2.svg" data={{
                    sub: {
                        en: "The",
                        pt: "A"
                    },
                    title: {
                        en: "Problematics",
                        pt: "Problemática"
                    },
                    content: {
                        en: "Finding a place to stay during your university season can be a very hard task, specially if you're going to a new city or country.",
                        pt: "Encontrar um lugar para ficar durante sua temporada universitária pode ser uma tarefa muito difícil, especialmente se você está indo para uma nova cidade ou país."
                    }
                }} />
            </div>
        </div>
    )
}

export default Explanation