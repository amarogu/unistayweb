'use client'
import { useContext } from "react";
import LanguageContext from "../LanguageContext";

const Advertisement = () => {

    const { language } = useContext(LanguageContext);

    return (
        <div className="bg-gray mt-4 md:my-4 shadow-md rounded border p-3 border-slate-500">
            <div className="flex">
                <div className="flex flex-col gap-2">
                    <p className="font-einaSemi">
                        {language == 'English' ? 'College Guide' : 'College Guide'}
                    </p>
                    <p className="max-w-[300px]">
                        {language == 'English' ? 'Then you wonder, "how do I apply to a university as an international student?" Find that out and much more on the College Guide website - A complete universitary guide that helps you to get your acceptances in international universities!' : 'Mas aí fica a dúvida, como aplicar para uma faculdade no exterior? Descubra isso e muito mais no website College Guide - um guia universitario completo que te ajuda em etapas a conseguir sua aprovação em uma universidade internacional!'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Advertisement;