import React from 'react';

const testimonialData = [
  {
    name: 'Jenna Hale',
    content: 'Planning family vacations has never been easier. Your app has a great selection of accommodations and activities. A little more flexibility in customizing itineraries would make it perfect!',
    rating: 5,
  },
  {
    name: 'Glen Jordan',
    content: 'I travel frequently for work, and this app has simplified everything. The instant confirmations and reminders are a lifesaver. Highly recommended to all travelers!',
    rating: 4,
  },
  {
    name: 'Lea Nils',
    content: "I appreciate the app's booking convenience, but I've encountered a few glitches during the process. With some fine-tuning, it could be top-notch",
    rating: 3,
  },
  {
    name: 'Nora Star',
    content: "I've used this app for several trips, and it's been a great companion. Easy bookings and a wide range of options. Just a small improvement away from perfection!",
    rating: 5,
  },
  {
    name: 'Glen Jordan',
    content: "Booking flights and hotels has never been this hassle-free. Your app saved me time and money. It's my go-to platform for all my travel plans!",
    rating: 5,
  },
];

const Quotes = () => {
  return (
    <section className="quotes quotes-slider" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="title">Testimonials</h2>
          <p>What others think about us</p>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="quote-carousel" style={{ display: 'flex', flexDirection: 'row', margin: '0', padding: '0' }}>
              {testimonialData.map((testimonial, index) => (
                <div className="quote" key={index} style={{ flex: '0 1 auto', marginRight: '0px', marginLeft: '0' }}>
                  <div className="text">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.content}</p>
                  </div>
                  <div className="more">
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <span key={starIndex} className="fa fa-star"></span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
