import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../Assets/Rideon Images/img-2.jpg';
import img2 from '../../Assets/Rideon Images/img-3.jpg';
import img3 from '../../Assets/Rideon Images/img-4.jpg';



const Caro = () => {
       
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
        <OwlCarousel  className='owl-theme' loop margin={10} nav items={4} autoplay responsive={responsive}>
         
          <div className="item card bordered m-3 pb-3 ">
            <img src={img1} className="border-bottom" width="400" alt="car-1" />
            <div className="card-body">
              <a href="#" className="btn bg-danger text-white mb-4">From $110</a>
              <p className="fs-4">BMW Grand Sedan</p>
              <div
                style={{
                  backgroundColor: 'rgb(230, 67, 67)',
                  width: '4rem',
                  height: '3px',
                }}
              ></div>
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">4 Passengers</span><br />
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">2 Bags</span>
            </div>
          </div>

          <div className="item card bordered m-3 pb-3">
            <img src={img2} className="border-bottom" width="400" alt="car-2" />
            <div className="card-body">
              <a href="#" className="btn bg-danger text-white mb-4">From $150</a>
              <p className="fs-4">Casillac Escalade</p>
              <div
                style={{
                  backgroundColor: 'rgb(230, 67, 67)',
                  width: '4rem',
                  height: '3px',
                }}
              ></div>
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">6 Passengers</span><br />
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">4 Bags</span>
            </div>
          </div>

          <div className="item card bordered m-3 pb-3">
            <img src={img3} className="border-bottom" width="400" alt="car-3" />
            <div className="card-body">
              <a href="#" className="btn bg-danger text-white mb-4">From $90</a>
              <p className="fs-4">Lincoln MKt</p>
              <div
                style={{
                  backgroundColor: 'rgb(230, 67, 67)',
                  width: '4rem',
                  height: '3px',
                }}
              ></div>
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">6 Passengers</span><br />
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">3 Bags</span>
            </div>
          </div>
          {/*  */}
          <div className="item card bordered m-3 pb-3">
            <img src={img1} className="border-bottom" width="400" alt="car-1" />
            <div className="card-body">
              <a href="#" className="btn bg-danger text-white mb-4">From $110</a>
              <p className="fs-4">BMW Grand Sedan</p>
              <div
                style={{
                  backgroundColor: 'rgb(230, 67, 67)',
                  width: '4rem',
                  height: '3px',
                }}
              ></div>
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">4 Passengers</span><br />
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">2 Bags</span>
            </div>
          </div>

          <div className="item card bordered m-3 pb-3">
            <img src={img2} className="border-bottom" width="400" alt="car-2" />
            <div className="card-body">
              <a href="#" className="btn bg-danger text-white mb-4">From $150</a>
              <p className="fs-4">Casillac Escalade</p>
              <div
                style={{
                  backgroundColor: 'rgb(230, 67, 67)',
                  width: '4rem',
                  height: '3px',
                }}
              ></div>
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">6 Passengers</span><br />
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">4 Bags</span>
            </div>
          </div>

          <div className="item card bordered m-3 pb-3">
            <img src={img3} className="border-bottom" width="400" alt="car-3" />
            <div className="card-body">
              <a href="#" className="btn bg-danger text-white mb-4">From $90</a>
              <p className="fs-4">Lincoln MKt</p>
              <div
                style={{
                  backgroundColor: 'rgb(230, 67, 67)',
                  width: '4rem',
                  height: '3px',
                }}
              ></div>
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">6 Passengers</span><br />
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">3 Bags</span>
            </div>
          </div>
          {/*  */}
          <div className="item card bordered m-3 pb-3">
            <img src={img1} className="border-bottom" width="400" alt="car-1" />
            <div className="card-body">
              <a href="#" className="btn bg-danger text-white mb-4">From $110</a>
              <p className="fs-4">BMW Grand Sedan</p>
              <div
                style={{
                  backgroundColor: 'rgb(230, 67, 67)',
                  width: '4rem',
                  height: '3px',
                }}
              ></div>
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">4 Passengers</span><br />
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">2 Bags</span>
            </div>
          </div>

          <div className="item card bordered m-3 pb-3">
            <img src={img2} className="border-bottom" width="400" alt="car-2" />
            <div className="card-body">
              <a href="#" className="btn bg-danger text-white mb-4">From $150</a>
              <p className="fs-4">Casillac Escalade</p>
              <div
                style={{
                  backgroundColor: 'rgb(230, 67, 67)',
                  width: '4rem',
                  height: '3px',
                }}
              ></div>
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">6 Passengers</span><br />
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">4 Bags</span>
            </div>
          </div>

          <div className="item card bordered m-3 pb-3">
            <img src={img3} className="border-bottom" width="400" alt="car-3" />
            <div className="card-body">
              <a href="#" className="btn bg-danger text-white mb-4">From $90</a>
              <p className="fs-4">Lincoln MKt</p>
              <div
                style={{
                  backgroundColor: 'rgb(230, 67, 67)',
                  width: '4rem',
                  height: '3px',
                }}
              ></div>
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">6 Passengers</span><br />
              <i className="bi bi-check fs-4 text-danger"></i>
              <span className="fs-5">3 Bags</span>
            </div>
          </div>

          
        </OwlCarousel>
      </div>
    </>
    
  );
};

export default Caro;

