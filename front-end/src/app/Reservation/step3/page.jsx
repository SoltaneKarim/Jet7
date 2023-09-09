"use client"
import React from 'react';

const page = () => {
  return (
    <section className="page">
      {/* Page header */}
      <div className="page-header" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
        <div className="container">
          <h2 className="title">Reservation completed</h2>
          <p>Thank you!</p>
        </div>
      </div>

      {/* Step wrapper */}
      <div className="step-wrapper">
        <div className="container">
          <div className="stepper">
            <ul className="row">
              <li className="col-md-4 active">
                <a href="reservation-1.html"><span data-text="Room & rates"></span></a>
              </li>
              <li className="col-md-4 active">
                <a href="reservation-2.html"><span data-text="Reservation"></span></a>
              </li>
              <li className="col-md-4 active">
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
            {/* Note block */}
            <div className="cart-wrapper">
              <div className="note-block">
                <div className="row">
                  {/* Left content */}
                  <div className="col-md-6">
                    <div className="white-block">
                      <div className="h4">Guest information</div>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Name</strong> <br />
                            <span>John Doe</span>
                          </div>
                        </div>
                        {/* ... (other guest information fields) ... */}
                      </div>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="col-md-6">
                    <div className="white-block">
                      <div className="h4">Reservation details</div>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Order no.</strong> <br />
                            <span>52522-63259226</span>
                          </div>
                        </div>
                        {/* ... (other reservation details fields) ... */}
                      </div>
                      <div className="h4">Payment details</div>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Transaction time</strong> <br />
                            <span>06/30/2017 at 00:59</span>
                          </div>
                        </div>
                        {/* ... (other payment details fields) ... */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                    <div>
                      <strong>Arrival date</strong> <a href="#">(September 22, 2017)</a>
                    </div>
                    <div>
                      <strong>Guests</strong> 2 Adults, 1 Child
                    </div>
                    <div>
                      <strong>Nights</strong> 7
                    </div>
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
                    Promo code included!
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
                    <a href="reservation-1.html" className="btn btn-clean-dark">Back</a>
                  </div>
                  <div>
                    <button onClick={() => window.print()} className="btn btn-main">Print <span className="icon icon-printer"></span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
