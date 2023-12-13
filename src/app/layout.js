import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '600', '700'], 
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Escola Principius da Vida',
  description: 'Educando com amor e princípios.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
