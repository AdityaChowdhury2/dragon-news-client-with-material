import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import {

  Container

} from '@mui/material';
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Container className='min-h-[calc(100vh-265px)]'>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  )
}
