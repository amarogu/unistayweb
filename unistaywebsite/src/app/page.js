import Image from 'next/image'
import Navbar from './NavComponents/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import Footer from './Footer/Footer'
import { LanguageProvider } from './LanguageContext';
import Explanation from './Explanation/Explanation'

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <section className='bg-gradient relative p-8 font-einaReg text-sm overflow-hidden'>
          <section className='mx-auto container relative sm:max-w-[516px] md:max-w-[768px] lg:max-w-[1024px]'>
            <Navbar />
            <Hero />
          </section>
          <div className='h-32 bg-gradient-to-t absolute bottom-0 w-screen from-background to-background/0'></div>
        </section>
        <section className='text-center p-8 mx-auto container sm:max-w-[516px] md:max-w-[768px] lg:max-w-[1024px]'>
          <About />
        </section>
        <section className='bg-gradient-contain'>
          <Explanation />
          
        </section>
        <div className='border-t-2 border-gray '>
          <footer className='mx-auto p-8 container sm:max-w-[516px] md:max-w-[768px] lg:max-w-[1024px]'>
            <Footer />
          </footer>
        </div>
      </main>
    </LanguageProvider>
  )
}
