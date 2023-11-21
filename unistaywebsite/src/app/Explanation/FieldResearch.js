'use client'
import { useContext } from 'react';
import LanguageContext from '../LanguageContext';
import Image from 'next/image';

const FieldResearch = () => {
    const {language} = useContext(LanguageContext);
    return (
        <div className='pt-8'>
            <div className='flex flex-col gap-4 max-w-[350px] mx-auto text-left'>
                <div className='flex gap-3'>
                    <Image src='/fieldresearch.svg' width={38} height={38} />
                    <div className='flex flex-col items-start'>
                        <p className='text-xs'>{language == 'English' ? 'The' : 'A'}</p>
                        <p className='font-einaSemi'>{language == 'English' ? 'Field research' : 'Pesquisa de campo'}</p>
                    </div>
                </div>
                <p>
                    {language == 'English' ? 'The necessity for the development of the application is shown by the target\'s audience responses' : 'A necessidade para o desenvolvimento da aplicação é mostrada pelas respostas do público alvo'}
                </p>
                <a href='https://forms.office.com/Pages/AnalysisPage.aspx?AnalyzerToken=uaCtTWN4GgmeQRLsmG0WPfVkl0KzFmqI&id=bEY47UG2fUOa6dgBuCn6lMwGvOIntQpDjb8-NiQUZPFURDIxUDA2QTJWN0xLUDhBQlU2WVU3TjVBTi4u' className='underline'>{language == 'English' ? 'Check the results' : 'Veja os resultados'}</a>
                <Image src='/fieldresearch2.svg' width={250} height={0} />
            </div>
        </div>
    )
}

export default FieldResearch