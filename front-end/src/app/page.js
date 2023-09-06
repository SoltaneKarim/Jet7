"use client";
import "./globals.css";
import { Inter } from "@next/font/google";
import Header from "./Header/page.jsx";
import Carousel from "./Carousel/page.jsx";
import PageLoader from "./PageLoader/page.jsx";
import logo from "../../public/favicon.ico";
import Booking from "./Booking/page.jsx";
import RoomsAccommodation from "./RoomsAccomodation/page.jsx";
import ResortFacilities from "./ResortFacilities/page.jsx";
import LatestNews from "./LatestNews/page.jsx";
import NearbyCards from "./NearbyCards/page.jsx";
import ImageBlocks from "./ImageBlocks/page.jsx";
import Quotes from "./Quotes/page.jsx";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Carousel />
      <Booking />
      <RoomsAccommodation />
      <ResortFacilities />
      <LatestNews />
      
      {/* <NearbyCards /> */}
      
      <ImageBlocks />
      <Quotes />


    </div>
  );
}
