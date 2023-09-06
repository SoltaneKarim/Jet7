import React from 'react';
import services1Image from '../assets/images/services-1.jpg';
import services2Image from '../assets/images/services-2.jpg';
import services3Image from '../assets/images/services-3.jpg';
import services4Image from '../assets/images/services-4.jpg';

const ResortFacilities = () => {
  return (
    <section className="stretcher-wrapper">
      {/* Stretcher Header */}
      <div className="section-header">
        <div className="container">
          <h2 className="title">
            Resort facilities <a href="facility.html" className="btn btn-sm btn-clean-dark">Explore more</a>
          </h2>
          <p>
            With the best luxury spa, salon, and fitness experiences
          </p>
        </div>
      </div>
      {/* Stretcher */}
      <ul className="stretcher">
        {/* Stretcher Item 1 */}
        <li className="stretcher-item" style={{ backgroundImage: `url(${services1Image.src})` }}>
          <div className="stretcher-logo">
            <div className="text">
              <span className="text-intro h4">Spa center</span>
            </div>
          </div>
          <figure>
            <h4>Spa center</h4>
            <figcaption>Unparalleled devotion to luxury</figcaption>
          </figure>
          <a href="facility.html">Anchor link</a>
        </li>
        {/* Stretcher Item 2 */}
        <li className="stretcher-item" style={{ backgroundImage: `url(${services2Image.src})` }}>
          <div className="stretcher-logo">
            <div className="text">
              <span className="text-intro h4">Gym</span>
            </div>
          </div>
          <figure>
            <h4>Gym</h4>
            <figcaption>Care about results</figcaption>
          </figure>
          <a href="facility.html">Anchor link</a>
        </li>
        {/* Stretcher Item 3 */}
        <li className="stretcher-item" style={{ backgroundImage: `url(${services3Image.src})` }}>
          <div className="stretcher-logo">
            <div className="text">
              <span className="text-intro h4">Fitness</span>
            </div>
          </div>
          <figure>
            <h4>Fitness</h4>
            <figcaption>Your daily activities</figcaption>
          </figure>
          <a href="facility.html">Anchor link</a>
        </li>
        {/* Stretcher Item 4 */}
        <li className="stretcher-item" style={{ backgroundImage: `url(${services4Image.src})` }}>
          <div className="stretcher-logo">
            <div className="text">
              <span className="text-intro h4">Beauty salon</span>
            </div>
          </div>
          <figure>
            <h4>Beauty salon</h4>
            <figcaption>Hair salons and spas</figcaption>
          </figure>
          <a href="facility.html">Anchor link</a>
        </li>
        {/* Stretcher Item More */}
        <li className="stretcher-item more">
          <div className="more-icon">
            <span data-title-show="Show more" data-title-hide="+"></span>
          </div>
          <a href="facility.html">Anchor link</a>
        </li>
      </ul>
    </section>
  );
};

export default ResortFacilities;
