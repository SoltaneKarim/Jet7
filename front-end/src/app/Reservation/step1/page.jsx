"use client"
import React, { useState } from 'react';
import '../../globals.css'
import "./style.css";
import Calendar from "./Calendar";
import Forum from "./Forum";
function page() {


  return (
    <>
  <section className="page">
      {/* Page header */}
      <div className="page-header" style={{ backgroundImage: "url(assets/images/header-1.jpg)" }}>
        <div className="container">
          <h2 className="title">Make a reservation</h2>
          <p>Proceed to booking step 2</p>
        </div>
      </div>

      {/* Checkout steps */}
      <div className="step-wrapper">
        <div className="container">
          <div className="stepper">
            <ul className="row">
              <li className="col-md-4 active">
                <a href="reservation-1.html"><span data-text="Room &amp; rates"></span></a>
              </li>
              <li className="col-md-4">
                <a href="reservation-2.html"><span data-text="Reservation"></span></a>
              </li>
              <li className="col-md-4">
                <a href="reservation-3.html"><span data-text="Checkout"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Checkout */}
      <div className="checkout">
        <div className="container">
          <div className="clearfix">
            {/* Cart wrapper */}
         
          </div>
        </div>
      </div>
    </section>

{/* <Calendar style={{"display":"block"}} /> */}
   
    <Forum/>

    </>
    
    
  )
}

export default page
