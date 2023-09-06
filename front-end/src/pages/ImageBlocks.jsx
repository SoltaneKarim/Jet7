import React from 'react';
import image1 from '../app/assets/images/apartment-1.jpg';
import image2 from '../app/assets/images/apartment-2.jpg';

const ImageBlocks = () => {
  return (
    <section className="image-blocks image-blocks-header">
      <div className="section-header" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
        <div className="container">
          <h2 className="title">
            Apartment residences <a href="rooms-category.html" className="btn btn-sm btn-clean">View all</a>
          </h2>
          <p>At home while on the road.</p>
        </div>
      </div>
      <div className="container">
        {/* Left Block */}
        <div className="blocks blocks-left">
          <div className="item">
            <div className="text">
              <h2 className="title">Presidential <br />Suite</h2>
              <p>
                Newly refurnished luxury accommodation with the finest quality linen & quality decor.
                Air Conditioning Electric Blankets, Ironing Boards, Mini Bar, Flat Screen & Free Inhouse Movies, WiFi
                and Housekeeping by request.
              </p>
              <div className="room-facilities">
                <figure>
                  <figcaption><i className="hotelicon hotelicon-guest"></i> 4 Persons</figcaption>
                </figure>
                <figure>
                  <figcaption><i className="hotelicon hotelicon-roomservice"></i> Room service</figcaption>
                </figure>
                <figure>
                  <figcaption><i className="hotelicon hotelicon-king-bed"></i> Kingsize bed</figcaption>
                </figure>
                <figure>
                  <figcaption><i className="hotelicon hotelicon-kitchen"></i> All inclusive</figcaption>
                </figure>
                <figure>
                  <figcaption><i className="hotelicon hotelicon-compas"></i> 460 sqft room</figcaption>
                </figure>
                <figure>
                  <figcaption><i className="hotelicon hotelicon-tv"></i> TV</figcaption>
                </figure>
              </div>
              <div className="book">
                <div>
                  <a href="room-overview.html" className="btn btn-danger btn-lg">Book</a>
                </div>
                <div>
                  <span className="price h2">$ 129,00</span>
                  <span>per night</span>
                </div>
              </div>
            </div>
          </div>
          <div className="image" style={{ backgroundImage: `url(${image1.src})` }}>
            <img src={image1} alt="" />
          </div>
        </div>

        {/* Right Block */}
        <div className="blocks blocks-right">
          <div className="item">
            <div className="text">
              <h2 className="title">Luxury <br />apartment</h2>
              <p>
                The highest level of living with luxury. Residences are distinctively designed and exquisitely appointed,
                creating ideal places where memories are made and experiences are genuine.
              </p>
              <div className="room-facilities">
                <figure>
                  <figcaption><i className="hotelicon hotelicon-guest"></i> 4 Persons</figcaption>
                </figure>
                <figure>
                  <figcaption><i className="hotelicon hotelicon-king-bed"></i> Kingsize bed</figcaption>
                </figure>
                <figure>
                  <figcaption><i className="hotelicon hotelicon-roomservice"></i> Room service</figcaption>
                </figure>
                <figure>
                  <figcaption><i className="hotelicon hotelicon-kitchen"></i> All inclusive</figcaption>
                </figure>
                <figure>
                  <figcaption><i className="hotelicon hotelicon-compas"></i> 460 sqft room</figcaption>
                </figure>
                <figure>
                  <figcaption><i className="hotelicon hotelicon-tv"></i> TV</figcaption>
                </figure>
              </div>
              <div className="book">
                <div>
                  <a href="room-overview.html" className="btn btn-danger btn-lg">Book</a>
                </div>
                <div>
                  <span className="price h2">$ 229,00</span>
                  <span>per night</span>
                </div>
              </div>
            </div>
          </div>
          <div className="image" style={{ backgroundImage: `url(${image2.src})` }}>
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBlocks;
