"use client"
import './globals.css'
import { Inter } from '@next/font/google'
import Header from "./Header/page.jsx";
import Carousel from "./Carousel/page.jsx";
import PageLoader from "./PageLoader/page.jsx";
import logo from "../../public/favicon.ico";
import Booking from "./Booking/page.jsx";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
   
    

<Carousel />
<Booking />
   </div> 
    
    
    
  )
}
