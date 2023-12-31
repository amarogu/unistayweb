'use client'
import { useContext } from 'react';
import LanguageContext from '../LanguageContext';
import ExplanationItem from './ExplanationItem';
import FieldResearch from './FieldResearch';

const Explanation = () => {
    const {language} = useContext(LanguageContext);
    return (
        <div className='p-8'>
            <h2 className="font-einaSemi mb-8 text-center max-w-[300px] sm:max-w-[280px] mx-auto">{language == "English" ? "Everything you need for your uni housing experience, all in one place" : "Tudo que você precisa para sua experiência de casitas universitárias, tudo em um só lugar" }</h2>
            <div className='grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 md:gap-y-12'>
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
                }} className="pt-12 sm:pt-8 w-fit" />
                <ExplanationItem iconSrc="/goal.svg" imgSrc="/goal2.svg" data={{
                    sub: {
                        en: "The",
                        pt: "O"
                    },
                    title: {
                        en: "Goal",
                        pt: "Objetivo"
                    },
                    content: {
                        en: "The goal of UniStay is to make this process easier for you, by providing a platform where you can find all the information you need to find your place.",
                        pt: "O objetivo da UniStay é tornar esse processo mais fácil para você, fornecendo uma plataforma onde você pode encontrar todas as informações que precisa para encontrar seu lugar."
                    }
                }} className="pt-12 sm:pt-8 w-fit md:ml-auto" />
                <ExplanationItem iconSrc="/methodology.svg" imgSrc="/methodology2.svg" data={{
                    sub: {
                        en: "The",
                        pt: "A"
                    },
                    title: {
                        en: "Methodology",
                        pt: "Metodologia"
                    },
                    content: {
                        en: "We provide a platform where you can find all the information you need to find your place, such as: locations, universities, accommodation types and more.",
                        pt: "Fornecemos uma plataforma onde você pode encontrar todas as informações que precisa para encontrar seu lugar, como: localizações, universidades, tipos de acomodação e mais."
                    }
                }} className="pt-12 sm:pt-8 w-fit" />
                <FieldResearch className="pt-12 sm:pt-8 w-fit md:ml-auto" />
            </div>
        </div>
    )
}

export default Explanation