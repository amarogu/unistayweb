"use client"
import { useContext } from "react";
import LanguageContext from "../LanguageContext";
import Image from "next/image";

const Technologies = () => {
    const { language } = useContext(LanguageContext);
    return(
        <div className="p-8 md:mb-8 m-8 md:m-0 bg-gray rounded border border-slate-500">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col md:max-w-[40%] gap-2">
                    <div>
                        <h2 className="font-einaSemi text-lg">
                            {language == 'English' ? 'Technologies' : 'Tecnologias'} 
                        </h2>
                        <h2 className="font-einaSemi text-lg">
                            {language == 'English'? 'utilized' : 'utilizadas'}
                        </h2>
                    </div>
                    <p className="md:max-w-[85%]">
                        {language == 'English' ? 'Some of the technologies used to develop the system include - for the backend - NodeJS, Express, MongoDB and Google Cloud - and for the front end - Swift, SwiftUI, NextJS and TailwindCSS' : 'Algumas das tecnologias utilizadas para desenvolver o sistema incluem - para o backend - NodeJS, Express, MongoDB e Google Cloud - e para o frontend - Swift, SwiftUI, NextJS e TailwindCSS'}
                    </p>
                </div>
                
                    <Image src="/backend.png" width={240} height={0} className="hover:scale-110 transition-transform" />
                    <Image src="/frontend.png" width={240} height={0} className="hover:scale-110 transition-transform" />
                
            </div>
        </div>
    )
}

export default Technologies;