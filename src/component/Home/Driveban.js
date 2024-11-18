import React from 'react';
import img1 from '../../Assets/Rideon Images/img-1.jpg';

const Driveban = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img1})`,
          height: '80vh',
          width: '100%',
          backgroundSize: 'cover',
        }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <p className="fs-1 text-white">Reliable Drivers</p>
        <div
          style={{
            backgroundColor: 'rgb(230, 67, 67)',
            width: '4rem',
            height: '2px',
          }}
        ></div>
        <p className="text-white text-center">
          Expect only the best from our wide array of professionally trained
          <br />
          drivers, they will get you there on time.
        </p>
        <input
          type="button"
          value="About Us >"
          className="btn bg-danger text-white rounded-pill"
          style={{ border: 0 }}
        />
      </div>
    </>
  );
};

export default Driveban;
