import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../Assets/Rideon images2/img-2.jpg';
import img2 from '../../Assets/Rideon images2/img-3.jpg';
import img3 from '../../Assets/Rideon images2/img-5.jpg';

const Caro2 = () => {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  }
  return (
    <>
      <div className="container">
      <OwlCarousel  className='owl-theme' loop margin={10} nav items={3} autoplay responsive={responsive}>

          <div className="item card bordered m-3 pb-3">
            <img src={img1} alt="car-1" className="card-img-top" />
            <div className="card-body">
              <p className="fs-4 p-3">For This Week Only 10% Discounts On Friday</p>
              <hr />
              <p className="text-center">
                <span><i className="bi bi-calendar text-danger p-2"></i>01.11.2001</span>
                <span className="ps-4">
                  <i className="bi bi-chat-fill text-danger p-2"></i>2 Comments
                </span>
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                laudantium, soluta aperiam excepturi quam ullam, provident fugit! Rem?
              </p>
            </div>
          </div>

          <div className="item card bordered m-3 pb-3">
            <img src={img2} alt="car-2" className="card-img-top" />
            <div className="card-body">
              <p className="fs-4 p-3">For This Week Only 10% Discounts On Friday</p>
              <hr />
              <p className="text-center">
                <span><i className="bi bi-calendar text-danger p-2"></i>01.11.2001</span>
                <span className="ps-4">
                  <i className="bi bi-chat-fill text-danger p-2"></i>2 Comments
                </span>
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                laudantium, soluta aperiam excepturi quam ullam, provident fugit! Rem?
              </p>
            </div>
          </div>

          <div className="item card bordered m-3 pb-3">
            <img src={img3} alt="car-3" className="card-img-top" />
            <div className="card-body">
              <p className="fs-4 p-3">For This Week Only 10% Discounts On Friday</p>
              <hr />
              <p className="text-center">
                <span><i className="bi bi-calendar text-danger p-2"></i>01.11.2001</span>
                <span className="ps-4">
                  <i className="bi bi-chat-fill text-danger p-2"></i>2 Comments
                </span>
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                laudantium, soluta aperiam excepturi quam ullam, provident fugit! Rem?
              </p>
            </div>
          </div>

          <div className="item card bordered m-3 pb-3">
            <img src={img1} alt="car-1" className="card-img-top" />
            <div className="card-body">
              <p className="fs-4 p-3">For This Week Only 10% Discounts On Friday</p>
              <hr />
              <p className="text-center">
                <span><i className="bi bi-calendar text-danger p-2"></i>01.11.2001</span>
                <span className="ps-4">
                  <i className="bi bi-chat-fill text-danger p-2"></i>2 Comments
                </span>
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                laudantium, soluta aperiam excepturi quam ullam, provident fugit! Rem?
              </p>
            </div>
          </div>

          <div className="item card bordered m-3 pb-3">
            <img src={img2} alt="car-2" className="card-img-top" />
            <div className="card-body">
              <p className="fs-4 p-3">For This Week Only 10% Discounts On Friday</p>
              <hr />
              <p className="text-center">
                <span><i className="bi bi-calendar text-danger p-2"></i>01.11.2001</span>
                <span className="ps-4">
                  <i className="bi bi-chat-fill text-danger p-2"></i>2 Comments
                </span>
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                laudantium, soluta aperiam excepturi quam ullam, provident fugit! Rem?
              </p>
            </div>
          </div>

          <div className="item card bordered m-3 pb-3">
            <img src={img3} alt="car-3" className="card-img-top" />
            <div className="card-body">
              <p className="fs-4 p-3">For This Week Only 10% Discounts On Friday</p>
              <hr />
              <p className="text-center">
                <span><i className="bi bi-calendar text-danger p-2"></i>01.11.2001</span>
                <span className="ps-4">
                  <i className="bi bi-chat-fill text-danger p-2"></i>2 Comments
                </span>
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                laudantium, soluta aperiam excepturi quam ullam, provident fugit! Rem?
              </p>
            </div>
          </div>

        </OwlCarousel>
      </div>
    </>
  );
};

export default Caro2;
