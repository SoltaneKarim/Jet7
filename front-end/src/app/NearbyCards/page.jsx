import React from 'react';
import activity1Image from '../assets/images/activity-1.jpg';
import activity2Image from '../assets/images/activity-2.jpg';
import activity3Image from '../assets/images/activity-3.jpg';
import activity4Image from '../assets/images/activity-4.jpg';
import activity5Image from '../assets/images/activity-5.jpg';

const NearbyCards = () => {
  return (
    <section className="cards">
      {/* Cards Header */}
      <div className="section-header">
        <div className="container">
          <h2 className="title">
            Near by <a href="#" className="btn btn-sm btn-clean-dark">View all</a>
          </h2>
          <p>Here's a selection of iconic sites related to art, fashion, and design.</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* Card Item 1 */}
          <div className="col-xs-12 col-md-8">
            <figure>
              <figcaption style={{ backgroundImage: `url(${activity1Image.src})` }}>
                <img src={activity1Image} alt="" />
              </figcaption>
              <a href="#" className="btn btn-clean" onClick={() => {}}>
                Museums
              </a>
            </figure>
          </div>

          {/* Card Item 2 */}
          <div className="col-xs-6 col-md-4">
            <figure>
              <figcaption style={{ backgroundImage: `url(${activity2Image.src})` }}>
                <img src={activity2Image} alt="" />
              </figcaption>
              <a href="#" className="btn btn-clean">
                Nightlife
              </a>
            </figure>
          </div>

          {/* Card Item 3 */}
          <div className="col-xs-6 col-md-4">
            <figure>
              <figcaption style={{ backgroundImage: `url(${activity3Image.src})` }}>
                <img src={activity3Image} alt="" />
              </figcaption>
              <a href="#" className="btn btn-clean">
                Food &amp; drink
              </a>
            </figure>
          </div>

          {/* Card Item 4 */}
          <div className="col-xs-6 col-md-4">
            <figure>
              <figcaption style={{ backgroundImage: `url(${activity4Image.src})` }}>
                <img src={activity4Image} alt="" />
              </figcaption>
              <a href="#" className="btn btn-clean">
                Shopping
              </a>
            </figure>
          </div>

          {/* Card Item 5 */}
          <div className="col-xs-6 col-md-4">
            <figure>
              <figcaption style={{ backgroundImage: `url(${activity5Image.src})` }}>
                <img src={activity5Image} alt="" />
              </figcaption>
              <a href="#" className="btn btn-clean">
                The City
              </a>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyCards;
