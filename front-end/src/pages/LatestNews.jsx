import React from 'react';
import activity3Image from '../app/assets/images/activity-3.jpg';
import activity4Image from '../app/assets/images/activity-4.jpg';
import activity5Image from '../app/assets/images/activity-5.jpg';

const LatestNews = () => {
  return (
    <section className="blog blog-widget">
      {/* Blog Header */}
      <div className="section-header">
        <div className="container">
          <h2 className="title">
            Latest news <a href="blog-category.html" className="btn btn-sm btn-clean-dark">Explore more</a>
          </h2>
          <p>
            Events, places to go, tour info & more
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* Article Item 1 */}
          <div className="col-sm-4">
            <a href="blog-item.html">
              <article>
                <div className="image">
                  <img src={activity3Image.src} alt="" />
                </div>
                <div className="text">
                  <div className="time">
                    <span>22</span>
                    <span>05</span>
                    <span>2014</span>
                  </div>
                  <h2 className="h4 title">
                    What to do when holidays go wrong
                  </h2>
                </div>
              </article>
            </a>
          </div>
          {/* Article Item 2 */}
          <div className="col-sm-4">
            <a href="blog-item.html">
              <article>
                <div className="image">
                  <img src={activity4Image.src} alt="" />
                </div>
                <div className="text">
                  <div className="time">
                    <span>22</span>
                    <span>05</span>
                    <span>2014</span>
                  </div>
                  <h2 className="h4 title">
                    Everything you need to know about vaccinations
                  </h2>
                </div>
              </article>
            </a>
          </div>
          {/* Article Item 3 */}
          <div className="col-sm-4">
            <a href="blog-item.html">
              <article>
                <div className="image">
                  <img src={activity5Image.src} alt="" />
                </div>
                <div className="text">
                  <div className="time">
                    <span>22</span>
                    <span>05</span>
                    <span>2014</span>
                  </div>
                  <h2 className="h4 title">
                    Six simple ways to save money on airport car parking
                  </h2>
                </div>
              </article>
            </a>
          </div>
        </div> {/* /row */}
      </div> {/* /container */}
    </section>
  );
};

export default LatestNews;
