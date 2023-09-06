import React from 'react';
const Booking = () => {
  return (
    <section className="booking booking-inner">
      <div className="section-header hidden">
        <div className="container">
          <h2 className="title">
          <span>Booking</span>
           & reservations</h2>
        </div>
      </div>

      <div className="booking-wrapper">
        <div className="container">
          <div className="row">
            {/* Date Arrival */}
            <div className="col-xs-4 col-sm-3">
              <div className="date" id="dateArrival" data-text="Arrival">
                <input className="datepicker hasDatepicker" readOnly={true} />
                <div className="date-value">
                    <span className="day">5</span>
                    <span className="month">Sep</span>
                    <span className="year">2023</span>

                </div>
              </div>
            </div>

            {/* Date Departure */}
            <div className="col-xs-4 col-sm-3">
              <div className="date" id="dateDeparture" data-text="Departure">
                <input className="datepicker" readOnly={true}  />
                <div className="date-value">
                    <span className="day">5</span>
                    <span className="month">Sep</span>
                    <span className="year">2023</span>

                </div>
              </div>
            </div>

            {/* Guests */}
            <div className="col-xs-4 col-sm-2">
              <div className="guests" data-text="Guests">
                <div className="result">
                  <input
                    className="qty-result"
                    type="text"
                    value="2"
                    id="qty-result"
                    readOnly={true}
                  />
                  <div
                    className="qty-result-text date-value"
                    id="qty-result-text"
                  >2</div>
                </div>
                {/* Guests List */}
                <ul className="guest-list">
                  <li className="header">
                    Please choose the number of guests
                    <span className="qty-apply">
                      <i className="icon icon-cross"></i>
                    </span>
                  </li>

                  {/* Adults */}
                  <li className="clearfix">
                    <div>
                      <input
                        className="qty-amount"
                        value="2"
                        type="text"
                        id="ticket-adult"
                        data-value="2"
                        readOnly={true}
                      />
                    </div>
                    <div>
                      <span>Adults <small>16+ years</small></span>
                    </div>
                    <div>
                      <input
                        className="qty-btn qty-minus"
                        value="-"
                        type="button"
                        data-field="ticket-adult"
                      />
                      <input
                        className="qty-btn qty-plus"
                        value="+"
                        type="button"
                        data-field="ticket-adult"
                      />
                    </div>
                  </li>

                  {/* Children */}
                  <li className="clearfix">
                    <div>
                      <input
                        className="qty-amount"
                        value="0"
                        type="text"
                        id="ticket-children"
                        data-value="0"
                        readOnly={true}
                      />
                    </div>
                    <div>
                      <span>Children <small>2-11 years</small></span>
                    </div>
                    <div>
                      <input
                        className="qty-btn qty-minus"
                        value="-"
                        type="button"
                        data-field="ticket-children"
                      />
                      <input
                        className="qty-btn qty-plus"
                        value="+"
                        type="button"
                        data-field="ticket-children"
                      />
                    </div>
                  </li>

                  {/* Infants */}
                  <li className="clearfix">
                    <div>
                      <input
                        className="qty-amount"
                        value="0"
                        type="text"
                        id="ticket-infants"
                        data-value="0"
                        readOnly={true}
                      />
                    </div>
                    <div>
                      <span>Infants <small>Under 2 years</small></span>
                    </div>
                    <div>
                      <input
                        className="qty-btn qty-minus"
                        value="-"
                        type="button"
                        data-field="ticket-infants"
                      />
                      <input
                        className="qty-btn qty-plus"
                        value="+"
                        type="button"
                        data-field="ticket-infants"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Button */}
            <div className="col-xs-12 col-sm-4">
            <a href="/Registration" className="btn btn-clean">
        Book now
        <small>Best Prices Guaranteed</small>
      </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;

