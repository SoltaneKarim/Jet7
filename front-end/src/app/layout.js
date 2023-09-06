import './globals.css'
import CssImports from "./CssImports.jsx";
import { Inter } from 'next/font/google'
import Header from "./Header/page.jsx";
import PageLoader from "./PageLoader/page.jsx";
import Head from "./head.js";
import Subscribe from './Subscribe/page.jsx';
import Footer from './Footer/page.jsx';
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body className={inter.className}>
      <CssImports/>
      <PageLoader />
      <Header />

      {children}

      <Subscribe />
      <Footer />
      </body>
    </html>
  )
}