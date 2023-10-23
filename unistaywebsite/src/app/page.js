import Image from 'next/image'
import Navbar from './NavComponents/Navbar'

export default function Home() {
  return (
    <main className='bg-gradient h-screen p-8'>
      <main className="font-einaReg text-sm mx-auto container relative sm:max-w-[516px] md:max-w-[768px] lg:max-w-[1024px]">
        <Navbar />
      </main>
    </main>
  )
}
