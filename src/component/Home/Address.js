import React from 'react';

const Address = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white mt-5">
        <div className="row m-0 py-3">
          <div className="col-lg pe-2">
            <ul className="list-unstyled ul2">
              <li>Distance</li>
              <li>Hourly</li>
              <li>Flat Rate</li>
            </ul>
          </div>

          <div className="col-lg-2">
            <label htmlFor="height" className="form-label">PickUp Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a location"
            />
          </div>
          <div className="col-lg-2">
            <label htmlFor="height" className="form-label">Drop off Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a location"
            />
          </div>
          <div className="col-lg-2">
            <label htmlFor="height" className="form-label">Return</label>
            <input type="text" className="form-control" placeholder="On way" />
          </div>
          <div className="col-lg-2">
            <label htmlFor="height" className="form-label">PickUp Date</label>
            <input type="text" className="form-control" placeholder="1/11/2001" />
          </div>
          <div className="col-lg-2">
            <label htmlFor="height" className="form-label">PickUp Time</label>
            <input type="text" className="form-control" placeholder="01:00" />
          </div>
          <div className="col-lg pt-4">
            <input
              type="button"
              value="Reserve Now >"
              className="bg-danger text-white rounded-pill py-2 btn-lg"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-column mt-5 mb-5">
        <p className="fs-3">Our Fleet</p>
        <div
          style={{ backgroundColor: 'rgb(230, 67, 67)', width: '4rem', height: '3px' }}
        ></div>
        <p className="text-center">
          Choose from a wide selection of boats ranging from luxury motor yachts to classic sailing yachts. We have every
          type of boat available to meet your needs. We also take custom orders, and your needs
          will help us acquire a specific yacht.
          <br />
        </p>
      </div>
    </>
  );
};

export default Address;
