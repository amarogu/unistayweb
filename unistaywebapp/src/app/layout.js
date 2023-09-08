import './globals.css'
import localFont from 'next/font/local'

const einaReg = localFont({
    src: './eina-03-regular.ttf',
    variable: '--font-eina-reg'
})
  
const einaSemi = localFont({
    src: './eina-03-semibold.ttf',
    variable: '--font-eina-semi'
})
  
const einaBold = localFont({
    src: './eina-03-bold.ttf',
    variable: '--font-eina-bold'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${einaReg.variable} ${einaSemi.variable} ${einaBold.variable}`}>
      <body className='bg-background-light dark:bg-background'>{children}</body>
    </html>
  )
}
