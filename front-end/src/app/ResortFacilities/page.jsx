import React from 'react';
import compagnie from '../../../../compagnie.json';

const ResortFacilities = () => {
  
  // const airlines = compagnie.slice(0, 4); // Get the first 4 items

  return (
    <section className="stretcher-wrapper">
      {/* Stretcher Header */}
      <div className="section-header">
        <div className="container">
          <h2 className="title">
            Resort facilities{' '}
            <a href="facility.html" className="btn btn-sm btn-clean-dark">
              Explore more
            </a>
          </h2>
          <p>With the best luxury spa, salon, and fitness experiences</p>
        </div>
      </div>
      {/* Stretcher */}
      <ul className="stretcher">
        {compagnie.map((airline, index) => (
          <li
            className="stretcher-item"
            key={index}
            style={{ backgroundImage: `url(${airline.url})` }}
          >
            <div className="stretcher-logo">
              <div className="text">
                <span className="text-intro h4">{airline.name}</span>
              </div>
            </div>
            <figure>
              <h4>{airline.name}</h4>
              <figcaption>Unparalleled devotion to luxury</figcaption>
            </figure>
            <a href="facility.html">Anchor link</a>
          </li>
        ))}
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
