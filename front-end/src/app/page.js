"use client"
import { Inter } from '@next/font/google'
import CssImports from "./CssImports.jsx";
import Header from "../pages/Header.jsx";
import PageLoader from "../pages/PageLoader.jsx";
import logo from "../../public/favicon.ico";
import FrontpageSlider from "../Pages/FrontpageSlider.jsx";
import $ from 'jquery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from '../pages/Footer.jsx'
import Subscribe from '../pages/Subscribe.jsx'
import Quotes from '../pages/Quotes.jsx'
import ImageBlocks from '../pages/ImageBlocks.jsx'
import NearbyCards from '../pages/NearbyCards.jsx'
import LatestNews from '../pages/LatestNews.jsx'
import ResortFacilities from '../pages/ResortFacilities.jsx'
import RoomsAccommodation from '../pages/RoomsAccommodation.jsx'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   
    
  <PageLoader />
    <div className="wrapper">
    <Header />
    <FrontpageSlider />
    
    




    <RoomsAccommodation />
    <ResortFacilities />
    <LatestNews />
    <NearbyCards />
    <ImageBlocks />
    <Quotes />
    <Subscribe />
    <Footer />

    </div>

   </> 
    
    
    
  )
}
