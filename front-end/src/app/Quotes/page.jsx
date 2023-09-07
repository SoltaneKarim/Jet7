import React from 'react';

const testimonialData = [
  {
    name: 'Jenna Hale',
    content: 'Ipsum dolore eros dolore dolor dolores sit iriure',
    rating: 1,
  },
  {
    name: 'Glen Jordan',
    content: 'Ipsum dolore eros dolore dolor dolores sit iriure',
    rating: 4,
  },
  {
    name: 'Lea Nils',
    content: 'Ipsum dolore eros dolore dolor dolores sit iriure',
    rating: 5,
  },
  {
    name: 'Nora Star',
    content: 'Ipsum dolore eros dolore dolor dolores sit iriure',
    rating: 5,
  },
  {
    name: 'Glen Jordan',
    content: 'Ipsum dolore eros dolore dolor dolores sit iriure',
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
