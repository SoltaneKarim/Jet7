"use client"
import React from 'react'
import Picking from "./step1/Picking";
import Step3 from "./step3/page";

function page() {

  return (
    <div>
   <HotelProvider>
   <Picking setChang={setChang}/>
      <Step3 chang={chang} />
    

   </HotelProvider>
    

    </div>
  )
}

export default page


// .carousel-container img {
//   height: 100vh;
//   width: 100%;
// }

// .carousel-caption {
//   position: absolute;
//   bottom: 16.25rem !important;
 
//   font-size: 3rem;
//   font-size: 2rem;

// }
// .btn-group>.btn:first-child{
//   /* width: 600px !important; */
// }
// .dropd-container{
//   display: flex;
//   width: auto;
//   align-items: center;
//   flex-direction: column;
//   height: 5rem;
//   min-height: 33rem;
// }
// .bootstrap-select{
// width: 600px !important;
// }
// .holder-inputs{
//   font-family: "Montserrat", sans-serif;
//   font-size: 20px;
// }
// .carousel-container img {
//   height: 100vh;
//   width: 100%;
// }

// .carousel-caption {
//   position: absolute;
//   bottom: 16.25rem !important;
 
//   font-size: 3rem;
//   font-size: 2rem;

// }