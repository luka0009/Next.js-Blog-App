import Footer from './(shared)/Footer';
import Navbar from './(shared)/Navbar';
import './globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ["latin"]
})

export const metadata = {
  title: 'Blog App',
  description: 'Created by Next.js 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <Navbar />
      <body>{children}</body>
      <Footer />
    </html>
  )
}
