import React from 'react';
import img1 from "../../Assets/Rideon images2/img-2.jpg";
import img2 from "../../Assets/Rideon images2/img-3.jpg";
import img3 from "../../Assets/Rideon Images/img-10.jpg";
import img4 from "../../Assets/Rideon images2/img-5.jpg";

export const Company = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row m-0">
          <div className="col-md-6">
            <p className="fs-1">Our Company</p>
            <div
              style={{ backgroundColor: 'rgb(230, 67, 67)', width: '5rem', height: '3px' }}/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              possimus facilis placeat iste tempore libero odio mollitia dolores
              illum eum vero eveniet et sapiente harum, deserunt dolor! A
              blanditiis inventore nulla consequuntur nam provident iste dolorum
              expedita optio possimus dolorem illo, tempora assumenda
              necessitatibus corrupti voluptas amet voluptates asperiores. Maxime.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              reprehenderit tempore facilis rerum odit consequatur vitae. Autem
              numquam distinctio eum, animi laudantium aperiam et fugit nihil nam
              illo tenetur voluptatum veniam, necessitatibus in consectetur.
              Quidem inventore doloribus doloremque illo aut accusamus repellendus
              adipisci et! Porro, illum facilis nisi cupiditate delectus nobis
              similique at dolores consectetur repellendus. Fugiat, illo aperiam,
              asperiores accusantium eius quasi a quod quam deleniti, dignissimos
              vitae quisquam?
            </p>
          </div>
          <div className="col-md-6 g-3">
            <img
              src= {img1}
              className="img-fluid p-2"
              width="300"
              alt="Image 1"
            />
            <img
              src={img2}
              className="img-fluid p-2"
              width="300"
              alt="Image 2"
            />
            <img
              src={img3}
              className="img-fluid p-2"
              width="300"
              style={{ height: '235px' }}
              alt="Image 3"
            />
            <img
              src={img4}
              className="img-fluid p-2"
              width="300"
              alt="Image 4"
            />
          </div>
        </div>
      </div>   
    </>
  );
};

export default Company;