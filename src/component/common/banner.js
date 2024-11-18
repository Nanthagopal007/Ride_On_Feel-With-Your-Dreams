import React from 'react';
import img1 from "../../Assets/Rideon images2/img-1.jpg"

export const Banner = (props) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img1})`,
          height: '30vh',
          width: '100%',
          backgroundSize: 'cover',
        }}
        className="d-flex justify-content-center align-items-center flex-column">
        <p className="fs-1">{props.Title}</p>
        <div style={{ backgroundColor: 'rgb(230, 67, 67)', width: '5rem', height: '3px' }}></div>
        <i className="fs-5">Home &gt;{props.page}</i>
      </div>
    </>
  );
};

export default Banner;
