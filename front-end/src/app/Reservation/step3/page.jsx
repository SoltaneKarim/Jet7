"use client"
import React , { useContext } from 'react';
import  HotelContext  from "../Context/Hotelcontext.js";

const page = () => {
  // const { kalbe } = useContext(HotelContext)
// console.log("this is kalb",kalbe);
const echantillant= {
  "hotelId": "106005202",
  "heroImage": "https://d2xf5gjipzd8cd.cloudfront.net/available/960093366/960093366_WxH.jpg",
  "name": "The Manhattan at Times Square",
  "stars": 4,
  "brandIds": [],
  "distance": "3.53 miles from downtown",
  "relevantPoiDistance": "1.69 miles from Central Park",
  "coordinates": [
    -73.9826404,
    40.7622856
  ],
  "price": "$106",
  "cug": {
    "cugWithoutLabel": null,
    "rawType": "general",
    "type": "general",
    "icons": [],
    "discount": "12% off",
    "priceWithoutDiscount": "$120",
    "rawDiscountPercentage": 12
  },
  "cheapestOfferPartnerId": "d_ct",
  "cheapestOfferRateId": "eyJtaW5pX3ByaWNlX3Jvb21faWQiOiIxNDIwMTgwMzEyIiwicmF0ZV9pZCI6IjE0MjAxODAzMTIiLCJhZHVsdHMiOm51bGwsImF1dGhvcml6YXRpb25faW5mbyI6W3siQ29kZSI6IlB1YmxpY1BhcmFtZXRlciIsIlZhbHVlIjoiSDRzSUFBQUFBQUFBQUdWUjIyckRNQXo5RjcrdUdYTHU5SzJYbFFVQ0M2UjVXc2J3SEtjemRlUGlPSU5RK3UrVGszWmpEUHdnbnlQcEhFa1hrcTJyWjIyRjJrbGxoU0ZMY3FuSlNqWTFXVklcL2htUlJrODJuNE1lczJ6SXJFSzJKRDM3Z1FlcjVVSk03XC9UTFlcL3p5ZGVUMTAxb3diM2N4MFZjNncwWDFmOWNKTTRHNlZsMDh6UHZSV240UXBqRDRMWTBla1g5SFNcL2J0QmxZTTJEcVlBaTE4aW15eERlSDFETU5lY3FWbE9kTzgzeFVJeDIycHptbUNwK3drczUxRURtb2FSYTFmcXdYRHhKNldhVW1yQ2xKS3M0Mkp3XC95dFo0R1JkTDNzck9qNFdSbW9qN1lqNzg1RlIrcEJ0TVVhTDRFT1NVTTh0QlZJSUlBS0lxQmNtdElHV2lpQnRlUmkzXC9JUDZQT1N0QUtDTVJrR01QZkF3aGU2bk50TU1IanVmRWM1eEFTdGo1QmRUZTNrU1R2Qm4zM3VBNWZRZVVmY0JVb3l3UXA3WFN2UGo3UTVaazZObkxJdWRDSk9OcytrdVRhN2YwQWJSbWcwQ0FBQT0ifSx7IkNvZGUiOiJNaW5QcmljZV9QYXJ0bmVyX2RhdGEiLCJWYWx1ZSI6Ikg0c0lBQUFBQUFBQUFFM1F5MDdETUJBRjBIK1pkUnZOK0psMEN4VmloNmpZWldOY3A3V1VPRkhxb3FJcVwvODQ0cUlLbHo5eDV5SGNZWW5xYm93K3ZxUnRoQlwvZTJ5RlJrSHNlaGhSMkwrenF0d3FcL2Eya3BwMUVyWlRRczV1eHVqRXFheUZxVmNzZlRGSXpNcGdWU2pKRkhVNVREMUxxMFZ5U3dRaStjeHVcLzR4dmJHeXNxcFJoTGhPbnk1VFVWTkpVeE1WYzhkcm45bHdLWUU0aEV0MlF3bVJhUWk1VDVNVXB0Um01OE82ckFWbVhtY3RiUVVLaVh3UzZwTGNLa3RIN0NqSXV2UEtkUDZUaEZlK0M0amtTRXZUd2dJYjZPTHRuYVwvZnB4enpOMzhJakhNOHhlVDZwK3M4aCtUWjRQRHl6TWxIWVhcL3paNWRPQVhhNmtycHVOdUN2bHp3T1wveG8rRHFYaGxcL1wvaXRxS0dqRjZXSDcrRzJhS1pBUUFBIn1dfQ==",
  "rawPrice": 106,
  "rating": {
    "description": "Good",
    "count": 12408,
    "value": "7.0",
    "color": "colorKolkata"
  },
  "reviewSummary": {
    "description": "Good",
    "count": 12408,
    "formatCount": "12,408",
    "value": "3.5",
    "formatValue": "3.5",
    "color": "colorKolkata",
    "taImage": "https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/3.5-64600-4.png",
    "confidenceBadge": {
      "type": "location",
      "score": 4.5,
      "icon": "thumbs-up",
      "color": {
        "light": "colorMonteverde",
        "dark": "colorMonteverde"
      },
      "message": "Hotel location is rated 4.5/5"
    }
  },
  "cheapestOffer": "dbook",
  "offerTypes": "dbookAndMeta",
  "guestType": null,
  "exclusiveDealLabel": "Exclusive price - save $5.00",
  "pricesFrom": "11 prices from",
  "images": [
    "https://d2xf5gjipzd8cd.cloudfront.net/available/960093366/960093366_WxH.jpg",
    "https://d2xf5gjipzd8cd.cloudfront.net/available/960093348/960093348_WxH.jpg",
    "https://d2xf5gjipzd8cd.cloudfront.net/available/208609874/208609874_WxH.jpg"
  ],
  "otherRates": [
    {
      "partnerId": "d_sg",
      "partnerName": "Easytrip",
      "rawPrice": 111,
      "price": "$111"
    },
    {
      "partnerId": "h_hc",
      "partnerName": "Hotels.com",
      "rawPrice": 117,
      "price": "$117"
    },
    {
      "partnerId": "h_xp",
      "partnerName": "Expedia",
      "rawPrice": 117,
      "price": "$117"
    },
    {
      "partnerId": "h_tc",
      "partnerName": "Travelocity",
      "rawPrice": 117,
      "price": "$117"
    },
    {
      "partnerId": "h_pr",
      "partnerName": "Priceline",
      "rawPrice": 117,
      "price": "$117"
    },
    {
      "partnerId": "h_ei",
      "partnerName": "Edreams",
      "rawPrice": 117,
      "price": "$117"
    },
    {
      "partnerId": "h_bc",
      "partnerName": "Booking.com",
      "rawPrice": 117,
      "price": "$117"
    },
    {
      "partnerId": "h_ad",
      "partnerName": "Agoda",
      "rawPrice": 127,
      "price": "$127"
    },
    {
      "partnerId": "h_pi",
      "partnerName": "Prestigia",
      "rawPrice": 131,
      "price": "$131"
    },
    {
      "partnerId": "h_gt",
      "partnerName": "Getaroom",
      "rawPrice": 159,
      "price": "$159"
    }
  ],
  "priceDescription": "$106 for 1 night",
  "taxPolicy": "Taxes and fees not included",
  "rateFeatures": [],
  "cheapestOfferPartnerName": "Trip.com"
}
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
                            <span>{localStorage.username}</span>
                          </div>
                        </div>
                       <img className='theuser' src={localStorage.image} />
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
                    <a href="room-overview.html"><img src={localStorage.imagehoe} alt="" /></a>
                  </div>
                  <div className="title">
                    <div className="h2"><a href="room-overview.html">{localStorage.name} </a></div>
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
                    <span className="final h3">{localStorage.priceDescription} </span>
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
                    <div className="h2 title">${localStorage.priceDescription.match(/\d+(\.\d+)?/g)[0]*7} </div>
                  </div>
                </div>
              </div>

              {/* Cart navigation */}
              <div className="clearfix">
                <div className="cart-block cart-block-footer cart-block-footer-price clearfix">
                  <div>
                    <a  className="btn btn-clean-dark">Back</a>
                  </div>
                  <div>
                   <a href="/">
                   <button onClick={() => window.print()} className="btn btn-main">Print <span className="icon icon-printer"></span></button>

                   </a> 
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
