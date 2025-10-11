import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Ehsas Lab - Training Institute',
  description: 'Learn graphic designing from foundation to mastery and become the mind behind winning brands.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter`}>
        {children}
      </body>
    </html>
  )
}