import Image from 'next/image'
import Menu from './menu'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-center text-body-dark-emphasized text-sm sm:text-base">Welcome to UniStay</h1>
      <Menu></Menu>
    </main>
  )
}
