
import React from 'react';

const Booking = () => {
  return (
    <div className="container mt-4">
      <div className="row m-0">
        <div className="col-md-6">
          <div className="row g-2 mb-2">
            <div className="col-10 text-center bg-dark text-white py-5 fs-5">
              Book Instantly Online Now
            </div>
            <div className="col-2 text-center bg-danger text-white py-5">{">"}</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-2">
            <div className="col-10 text-center bg-dark text-white py-5 fs-5">
              Learn More About Our Services
            </div>
            <div className="col-2 text-center bg-danger text-white py-5">{">"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
