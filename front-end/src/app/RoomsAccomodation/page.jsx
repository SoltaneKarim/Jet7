import React from 'react';
import MyCarousel from 'react-bootstrap/Carousel';
import hotel from '../../../../hotel.json';
import "../globals.css"
const RoomsAccommodation = () => {
  const hotels = hotel.data.hotels;

  return (
    <section className="rooms rooms-widget">
      {/* Rooms Header */}
      <div className="section-header">
        <div className="container">
          <h2 className="title">
            Rooms accommodation <a href="rooms-category.html" className="btn btn-sm btn-clean-dark">View all</a>
          </h2>
          <p>Designed as a privileged almost private place where you'll feel right at home</p>
        </div>
      </div>
      {/* Rooms Content */}
      <div className="container" id="rooms-acc">


        <MyCarousel>
          {hotels.map((hotel) => (
            <MyCarousel.Item key={hotel.hotelId} >
              <article>
              <div className='just-this-img' >

              <img src={hotel.heroImage} className='random-pic'/>

</div>
      <div className="details">
        <div className="text">
          <h3 className="title">
            <a href="room-overview.html">{hotel.name}</a>
          </h3>
          <p>{hotel.rating?.description}</p>
        </div>
        <div className="book">
          <div>
            <a href="room-overview.html" className="btn btn-main">
              Book now
            </a>
          </div>
          <div>
            <span className="price h4">$ 98,00</span>
            <div className="rating">
                      {[...Array(hotel.stars)].map((_, starIndex) => (
                        <span key={starIndex} className="fa fa-star"></span>
                      ))}
                    </div>
           
          </div>
        </div>
      </div>
    </article>



             
            </MyCarousel.Item>
          ))}
        </MyCarousel>
      </div>
    </section>
  );
};

export default RoomsAccommodation;
