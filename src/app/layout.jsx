import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jérémy Lavallée-Giroux',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
      <Header />
      {children}
      
      </body>
    </html>
  )
}
