import './globals.css'

import localFont from 'next/font/local'

const einaReg = localFont({
    src: '../../public/eina-03-regular.ttf',
    variable: '--font-eina-reg'
})
  
const einaSemi = localFont({
    src: '../../public/eina-03-semibold.ttf',
    variable: '--font-eina-semi'
})
  
const einaBold = localFont({
    src: '../../public/eina-03-bold.ttf',
    variable: '--font-eina-bold'
})

export const metadata = {
  title: 'UniStay',
  description: 'Your new home is right here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${einaReg.variable} ${einaSemi.variable} ${einaBold.variable} font-einaReg text-body-dark-emphasized bg-background`}>{children}</body>
    </html>
  )
}
