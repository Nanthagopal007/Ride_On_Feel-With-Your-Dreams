import React from 'react';
import img7 from "../../Assets/Rideon Images/img-7.jpg";
import video from "../../Assets/Rideon video/video.mp4";



const Worksection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <p className="fs-3">How We Work</p>
                <div
                style={{ backgroundColor: 'rgb(230, 67, 67)', width: '5rem', height: '3px' }}
                />
                <div className="card bg-secondary mt-3">
                <video controls poster={img7}>
                    <source
                    src={video}
                    type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
            <div className="col-md-6">
                <p className="fs-3">Our Mission</p>
                <div
                style={{ backgroundColor: 'rgb(230, 67, 67)', width: '5rem', height: '3px' }}/>
                <p className="border-bottom">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
                quidem amet quisquam est soluta voluptatum repellat consequatur ipsa
                velit dolores, deserunt voluptate itaque distinctio aperiam?
                </p>

                <p className="border-bottom py-3">
                <i className="bi bi-chevron-right text-danger"></i> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nam, quis!
                </p>
                <p className="border-bottom py-3">
                <i className="bi bi-chevron-right text-danger"></i> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nam, quis!
                </p>
                <p className="border-bottom py-3">
                <i className="bi bi-chevron-right text-danger"></i> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nam, quis!
                </p>
                <p className="border-bottom py-3">
                <i className="bi bi-chevron-right text-danger"></i> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nam, quis!
                </p>
                <p className="border-bottom py-3">
                <i className="bi bi-chevron-right text-danger"></i> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nam, quis!
                </p>
            </div>
        </div>
      </div>
      
    </>
  );
}

export default Worksection;
