import React from 'react';
import room1Image from '../app/assets/images/room-1.jpg';
import room2Image from '../app/assets/images/room-2.jpg';
import room3Image from '../app/assets/images/room-3.jpg';
import room4Image from '../app/assets/images/room-4.jpg';

const roomData = [
  {
    id: 1,
    title: 'Club Room',
    type: 'Single room',
    image: room1Image,
    price: '$ 98,00',
  },
  {
    id: 2,
    title: 'Classic Room',
    type: 'Double room',
    image: room2Image,
    price: '$ 129,00',
  },
  {
    id: 3,
    title: 'Superior Room',
    type: 'Queen size bed',
    image: room3Image,
    price: '$ 159,00',
  },
  {
    id: 4,
    title: 'Family Suite',
    type: 'Family room',
    image: room4Image,
    price: '$ 199,00',
  },
];

const RoomsAccommodation = () => {
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
      <div className="container">
        <div className="owl-rooms owl-theme">
          {roomData.map((room) => (
            <div className="item" key={room.id}>
              <article>
                <div className="image">
                  <img src={room.image.src} alt="" />
                </div>
                <div className="details">
                  <div className="text">
                    <h3 className="title"><a href="room-overview.html">{room.title}</a></h3>
                    <p>{room.type}</p>
                  </div>
                  <div className="book">
                    <div>
                      <a href="room-overview.html" className="btn btn-main">Book now</a>
                    </div>
                    <div>
                      <span className="price h4">{room.price}</span>
                      <span>per night</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>{/* /owl-rooms */}
      </div> {/* /container */}
    </section>
  );
};

export default RoomsAccommodation;
