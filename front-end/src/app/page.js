"use client"
import { Inter } from '@next/font/google'
import CssImports from "./CssImports.jsx";
import Header from "../pages/Header.jsx";
import PageLoader from "../pages/PageLoader.jsx";
import logo from "../../public/favicon.ico";
import FrontpageSlider from "../Pages/FrontpageSlider.jsx";
import $ from 'jquery';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   
    
  <PageLoader />
    <div className="wrapper">
    <Header />
    <FrontpageSlider />
    </div>

   </> 
    
    
    
  )
}
