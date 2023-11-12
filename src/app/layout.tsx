import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Photo List',
  description: '写真の一覧',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header>
          <h1>Photos List</h1>
        </header>
        <div className='mx-auto '>
          {children}
        </div>
      </body>
    </html>
  )
}
