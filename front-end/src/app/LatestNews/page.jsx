import React, { useState, useEffect } from 'react';
import reports from '../../../../blogs.json';

const LatestNews = () => {
  const [fakeDataIndex, setFakeDataIndex] = useState(0);
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    // Function to update the displayed data
    const updateData = () => {
      const startIndex = fakeDataIndex * 3;
      const endIndex = startIndex + 3;
      setFakeData(reports.slice(startIndex, endIndex));
    };

    // Initialize the displayed data
    updateData();

    // Timer to switch to the next set of data every 7 seconds
    const interval = setInterval(() => {
      setFakeDataIndex((prevIndex) => (prevIndex + 1) % Math.ceil(reports.length / 3));
      updateData();
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [fakeDataIndex]);

  // Inline style for bold text
  const boldTextStyle = {
    fontWeight: 'bold',
  };

  return (
    <section className="blog blog-widget">
      <div className="section-header">
        <div className="container">
          <h2 className="title">
            LATEST NEWS <a href="blog-category.html" className="btn btn-sm btn-clean-dark">Explore more</a>
          </h2>
          <p>
            Events, places to go, tour info & more
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {fakeData.map((item, index) => (
            <div className="col-sm-4" key={index}>
              <a href="blog-item.html">
                <article>
                  <div className="card">
                    <div className="image">
                      <img
                        src={item.countryPic}
                        alt=""
                        style={{ width: '100%', height: '350px', objectFit: 'cover' }} // Adjust the height as needed
                      />
                    </div>
                    <div className="text">
                      <div className="time">
                        <span>{new Date(item.blogDate).getDate()}</span>
                        <span>{new Date(item.blogDate).getMonth() + 1}</span>
                        <span>{new Date(item.blogDate).getFullYear()}</span>
                      </div>
                      <h2 className="h4 title" >{item.name}</h2> {/* Add the name with inline style */}
                      <p className="h4 title" style={boldTextStyle}>{item.message}</p> {/* Add the message with inline style */}
                    </div>
                  </div>
                </article>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
