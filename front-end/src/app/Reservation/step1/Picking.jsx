import React, { useState, useEffect } from 'react';
import hoe from '../../../../../hotel.json';


const Picking = () => {
  const [visibleHotels, setVisibleHotels] = useState(4); // Number of hotels to initially display
  const [hotelData, setHotelData] = useState([]);
  const hotels = hoe.data.hotels;

  useEffect(() => {
    // Function to update the displayed hotel data
    const updateData = () => {
      setHotelData(hotels?.slice(0, visibleHotels));
    };

    // Initialize the displayed hotel data
    updateData();
  }, [visibleHotels]);

  // Function to load more hotels
  const loadMoreHotels = () => {
    setVisibleHotels((prevVisibleHotels) => prevVisibleHotels + 4);
  };

  const renderStars = (numStars) => {
 
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      stars.push(<p className="strs" key={i}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg></p>);
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
                  <a href="step2"><button >
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
