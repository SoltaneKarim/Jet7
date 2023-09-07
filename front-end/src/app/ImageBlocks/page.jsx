import React, { useState, useEffect } from "react";
import catRooms from "../../../../rooms.json"; // Adjust the path to your JSON file

const ImageBlocks = () => {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const rooms = catRooms;

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the room index, looping back to 0 if it reaches the end
      setCurrentRoomIndex((prevIndex) => (prevIndex + 1) % rooms.length);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [currentRoomIndex, rooms]);

  return (
    <section className="image-blocks image-blocks-header">
      {/* Rest of your component code */}
      <div className="container" style={{ "margin-top": "100px" }}>
        {/* Left Block */}
        <div className="blocks blocks-left">
          <div className="item">
            <div className="text">
              <h2 className="title">{rooms[currentRoomIndex].category}</h2>
              <p>{rooms[currentRoomIndex].description}</p>
              <div className="room-facilities">
                <figure>
                  <figcaption>
                    <i className="hotelicon hotelicon-guest"></i> 4 Persons
                  </figcaption>
                </figure>
                <figure>
                  <figcaption>
                    <i className="hotelicon hotelicon-roomservice"></i> Room
                    service
                  </figcaption>
                </figure>
                <figure>
                  <figcaption>
                    <i className="hotelicon hotelicon-king-bed"></i> Kingsize
                    bed
                  </figcaption>
                </figure>
                <figure>
                  <figcaption>
                    <i className="hotelicon hotelicon-kitchen"></i> All
                    inclusive
                  </figcaption>
                </figure>
                <figure>
                  <figcaption>
                    <i className="hotelicon hotelicon-compas"></i> 460 sqft room
                  </figcaption>
                </figure>
                <figure>
                  <figcaption>
                    <i className="hotelicon hotelicon-tv"></i> TV
                  </figcaption>
                </figure>
              </div>
              <div className="book">
                <div>
                  <a
                    href="room-overview.html"
                    className="btn btn-danger btn-lg"
                  >
                    Book
                  </a>
                </div>
                <div>
                  <span className="price h2">
                    {rooms[currentRoomIndex].price}
                  </span>
                  <span>per night</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{ backgroundImage: `url(${rooms[currentRoomIndex].image})` }}
          >
            {/* Display the image */}
          </div>
        </div>
        {/* Right Block */}
        <div className="blocks blocks-right">
          <div className="item">
            <div className="text">
              <h2 className="title">
                {rooms[(currentRoomIndex + 1) % rooms.length].category}
              </h2>
              <p>{rooms[(currentRoomIndex + 1) % rooms.length].description}</p>
              <div className="room-facilities">
                <figure>
                  <figcaption>
                    <i className="hotelicon hotelicon-guest"></i> 4 Persons
                  </figcaption>
                </figure>
                <figure>
                  <figcaption>
                    <i className="hotelicon hotelicon-roomservice"></i> Room
                    service
                  </figcaption>
                </figure>
                <figure>
                  <figcaption>
                    <i className="hotelicon hotelicon-king-bed"></i> Kingsize
                    bed
                  </figcaption>
                </figure>
                <figure>
                  <figcaption>
                    <i className="hotelicon hotelicon-kitchen"></i> All
                    inclusive
                  </figcaption>
                </figure>
                <figure>
                  <figcaption>
                    <i className="hotelicon hotelicon-compas"></i> 460 sqft room
                  </figcaption>
                </figure>
                <figure>
                  <figcaption>
                    <i className="hotelicon hotelicon-tv"></i> TV
                  </figcaption>
                </figure>
              </div>
              <div className="book">
                <div>
                  <a
                    href="room-overview.html"
                    className="btn btn-danger btn-lg"
                  >
                    Book
                  </a>
                </div>
                <div>
                  <span className="price h2">
                    {rooms[(currentRoomIndex + 1) % rooms.length].price}
                  </span>
                  <span>per night</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                rooms[(currentRoomIndex + 1) % rooms.length].image
              })`,
            }}
          >
            {/* Display the image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBlocks;
