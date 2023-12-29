import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Nextjs Tutorial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='px-8 py-20 max-w-6xl mx-auto'>
        {children}
        </main>
        </body>
    </html>
  )
}
