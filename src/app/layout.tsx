import './globals.css'
import { Roboto_Condensed } from 'next/font/google'
import { Providers } from './providers'

const roboto = Roboto_Condensed({ 
  subsets: ['latin'],
  weight: [ "400", "700"],

});

export const metadata = {
  title: 'Arena Competitiva'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
      <link rel="icon" type="image/svg" sizes="32x32" href="/arena.svg"/>
      <link rel="icon" type="image/svg" sizes="16x16" href="/arena.svg"/>
      </head>
      <body className={roboto.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
