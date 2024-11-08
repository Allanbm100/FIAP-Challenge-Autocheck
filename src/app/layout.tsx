import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { UserContextProvider } from '../context/UserContext'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Autocheck',
  description: 'Generated by create-next-app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/png" href='./favicon.png' />
      </head>

      <UserContextProvider>
        <body className={rubik.className}>{children}</body>
      </UserContextProvider>
    </html>
  )
}
