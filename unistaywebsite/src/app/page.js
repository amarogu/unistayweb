import Image from 'next/image'
import Navbar from './NavComponents/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'

export default function Home() {
  return (
    <main>
      <section className='bg-gradient p-8 font-einaReg text-sm overflow-hidden'>
        <section className='mx-auto container relative sm:max-w-[516px] md:max-w-[768px] lg:max-w-[1024px]'>
          <Navbar />
          <Hero />
        </section>
      </section>
      <section className='text-center bg-background'>
        <About />
      </section>
    </main>
  )
}
