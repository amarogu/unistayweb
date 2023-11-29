'use client'
import { useContext } from "react";
import LanguageContext from "../LanguageContext";

const Advertisement = () => {

    const { language } = useContext(LanguageContext);

    return (
        <div className="p-8 md:mb-8 m-8 md:m-0 bg-gray rounded border border-slate-500">
            <div className="flex">
                <div className="flex flex-col gap-2">
                    <p className="font-einaSemi">
                        {language == 'English' ? 'CollegeGuide' : 'CollegeGuide'}
                    </p>
                    <p className="max-w-[300px]">
                        {language == 'English' ? 'Then you wonder, "how do I apply to a university as an international student?" Find that out and much more on the CollegeGuide ' : 'Mas aí fica a dúvida, como aplicar para uma faculdade no exterior? Descubra isso e muito mais no website College Guide - um guia universitario completo que te ajuda em etapas a conseguir sua aprovação em uma universidade internacional!'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Advertisement;