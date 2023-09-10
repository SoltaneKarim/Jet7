"use client"
import React, { useState, useEffect, useContext } from 'react';
import hoe from '../../../../hotel.json';
import  {UseHotelContext}  from "../Context/Hotelcontext.js";
const Picking = () => {
  const [visibleHotels, setVisibleHotels] = useState(6);
  const [hotelData, setHotelData] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const hotels = hoe.data.hotels;

// const setChangable =UseHotelContext()

  useEffect(() => {
    const updateData = () => {
      setHotelData(hotels?.slice(0, visibleHotels));
    };

    updateData();
  }, [visibleHotels]);


  // Function to load more hotels
  const loadMoreHotels = () => {
    setVisibleHotels((prevVisibleHotels) => prevVisibleHotels + 6);
  };

  // Function to handle the "Book Now" button click and save the selected hotel
  const handleBookNowClick = (hotel) => {
    setSelectedHotel(hotel)
   console.log(hotel);
      // Local Storage is supported
  
      // Define a key and its value
      var image = "imagehoe";
      var value = hotel.heroImage;
  
      var namehotel="name"
      var value1 = hotel.name

      var priceDescription="priceDescription"
      var value2=hotel.priceDescription
      // Store the key-value pair in Local Storage
      localStorage.setItem(image, value);
  localStorage.setItem(namehotel,value1)
  localStorage.setItem(priceDescription,value2)
      // You can also retrieve the value using the key
    
 };


  const renderStars = (numStars) => {
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      stars.push(
        <p className="strs" key={i}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </p>
      );
    }

    return stars;
  };

  return (
    <section className="hotel hotel-widget">
      <div className="container">
        <h2 className="title">Featured Hotels</h2>
        <div className="card__wrap--outer">
          {hotelData?.map((hotel, index) => (
            <div className="card__wrap--inner" key={index}>
              <div className="card">
                <img src={hotel.heroImage} alt={hotel.name} />
                <div className="card__item">
                  <h2>{hotel.name}</h2>
                  <p>${hotel.rawPrice}</p>
                </div>
                <div className="rate d-flex">{renderStars(hotel.stars)}</div>
                <div className="card__footer">
                 <a href="step2">
                 <button onClick={() => handleBookNowClick(hotel)}>
                    <small>Book Now</small>
                  </button>

                 </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleHotels < hotels?.length && (
          <div className="text-center">
            <button className="btn btn-primary" onClick={loadMoreHotels}>
              Load More
            </button>
          </div>
        )}
      </div>
     
    </section>
  );
};

export default Picking;
