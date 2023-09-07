
"use client"
/* 
import React, { useEffect, useRef } from "react";
import img from "../../assets/images/header-1.jpg";





const Page = () => {
  
  return (
    <>
      <div className="page-header" style={{ backgroundImage: `url(${img.src})` , paddingBottom: '40px', marginBottom: '-1rem',"margin":"unset" }}>
        <div className="container">
          <h2 className="title">Make a reservation</h2>
          <p>Proceed to booking step 2</p>
        </div>
      </div>

      <div className="step-wrapper">
        <div className="container">
          <div className="stepper">
            <ul className="row">
              <li className="col-md-4 active">
                <a href="step1">
                  <span data-text="Room & Plane"></span>
                </a>
              </li>
              <li className="col-md-4">
                <span data-text="Reservation"></span>
              </li>
              <li className="col-md-4">
                <span data-text="Checkout"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

<div className="dropd-container">


</div>
      
     
    </>
  );
};

export default Page;
 */

"use client"
import React, { useState } from 'react';
import '../../globals.css'
import { CountryField, StateField, VisitorAPIComponents } from 'react-country-state-fields';

function page() {
  const [country, setCountry] = useState({code: "", label: ""}); // the selected country
  const [state, setState] = useState({code: "", label: ""}); // the selected state
  const visitorApiPrjectId = ""; // assign your project ID here

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
            <div className="cart-wrapper">
              {/* Cart header */}
              <div className="cart-block cart-block-header clearfix">
                <div>
                  <span>Room type</span>
                </div>
                <div className="text-right">
                  <span>Price</span>
                </div>
              </div>

              {/* Cart items */}
              <div className="clearfix">
                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <a href="room-overview.html"><img src="assets/images/room-4.jpg" alt="" /></a>
                  </div>
                  <div className="title">
                    <div className="h2"><a href="room-overview.html">Luxury appartment</a></div>
                    <p>
                      <strong>Arrival date</strong> <br /> <a href="#">(September 22, 2017)</a>
                    </p>
                    <p>
                      <strong>Guests</strong> <br /> 2 Adults, 1 Child
                    </p>
                    <p>
                      <strong>Nights</strong> <br /> 7
                    </p>
                  </div>
                  <div className="price">
                    <span className="final h3">$ 1.998</span>
                    <span className="discount">$ 2.666</span>
                  </div>
                  {/* Delete this item */}
                  <span className="icon icon-cross icon-delete"></span>
                </div>
              </div>

              {/* Cart prices */}
              <div className="clearfix">
                <div className="cart-block cart-block-footer clearfix">
                  <div>
                    <strong>Discount 15%</strong>
                  </div>
                  <div>
                    <span>$ 159,00</span>
                  </div>
                </div>
                <div className="cart-block cart-block-footer clearfix">
                  <div>
                    <strong>TAX</strong>
                  </div>
                  <div>
                    <span>$ 59,00</span>
                  </div>
                </div>
              </div>

              {/* Cart final price */}
              <div className="clearfix">
                <div className="cart-block cart-block-footer cart-block-footer-price clearfix">
                  <div>
                    <span className="checkbox">
                      <input type="checkbox" id="couponCodeID" />
                      <label htmlFor="couponCodeID">Promo code</label>
                      <input type="text" className="form-control form-coupon" value="" placeholder="Enter your coupon code" style={{ display: 'none' }} />
                    </span>
                  </div>
                  <div>
                    <div className="h2 title">$ 1259,00</div>
                  </div>
                </div>
              </div>

              {/* Cart navigation */}
              <div className="clearfix">
                <div className="cart-block cart-block-footer cart-block-footer-price clearfix">
                  <div>
                    <a href="#" className="btn btn-clean-dark">Change</a>
                  </div>
                  <div>
                    <a href="reservation-2.html" className="btn btn-main">Reservation <span className="icon icon-chevron-right"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div className="dropd-container">
      <div className="dropd-container">
      <VisitorAPIComponents  projectId={visitorApiPrjectId} handleCountryChange={(countryObj) => setCountry(countryObj)} handleStateChange={(stateObj) => setState(stateObj)}>
        <CountryField className="country-field" label="Choose Your Country"></CountryField>
      </VisitorAPIComponents>
    </div>
    </div>

    </>
    
    
  )
}

export default page
