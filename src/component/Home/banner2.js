import React from 'react';
import img1 from '../../Assets/Rideon Images/img-1.jpg';
import img2 from '../../Assets/Rideon Images/img-6.jpg';




const Banner2 = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:`url(${img1})`,
          height: '60vh',
          width: '100%',
          backgroundSize: 'cover',
        }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <p className="fs-3 text-white">Testimonials</p>
        <div
          style={{ backgroundColor: 'rgb(230, 67, 67)', width: '4rem', height: '3px' }}
          className="mb-5"
        ></div>
        <p className="text-white text-center">
          Fast and professional are the best words to describe the chauffier
          team, they got to my business <br /> meeting on time, looking forward to
          next time!
        </p>
        <img src={img2} alt="profile" className="rounded-circle" />
        <p className="fs-5 text-white">Tony & Gary Biffer - Ford Party Bus</p>
      </div>
    </>
  );
};

export default Banner2;
