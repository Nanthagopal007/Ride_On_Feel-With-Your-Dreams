import React from 'react';
import img1 from '../../Assets/Rideon Images/img-1.jpg';

const Banner3 = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img1})`,
          height: '60vh',
          width: '100%',
          backgroundSize: 'cover',
        }}
        className="d-flex justify-content-center align-items-center flex-column mt-5"
      >
        <p className="text-white fs-1 text-center">
          Book Online Today And Travel In Comfort <br />On Your Next Trip
        </p>
        <div
          style={{
            backgroundColor: 'rgb(230, 67, 67)',
            width: '4rem',
            height: '3px',
          }}
        ></div>
        <p className="text-white text-center pt-5">
          Call Us On 1800-1111-2222 or EmailBooking@Website.Com
        </p>
        <a
          href="#"
          className="btn btn-danger rounded-pill py-2 mt-3"
          style={{ border: 0 }}
        >
          Online Booking {'>'}
        </a>
      </div>
    </>
  );
};

export default Banner3;
