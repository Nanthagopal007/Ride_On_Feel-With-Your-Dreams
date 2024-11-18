import React from 'react';


const Content = () => {
    return (
        <>

            <div className="container">
                <div className="row m-0 mt-5">
                    <div className="col-md-6">
                        <p className="fs-3">
                            <i className="bi bi-calendar-check p-3 text-danger"></i>Easy Online Booking
                        </p>
                        <div
                            className="ms-5"
                            style={{ backgroundColor: 'rgb(230, 67, 67)', width: '4rem', height: '3px' }}
                        ></div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
                            aliquid rerum fugit voluptatum architecto maxime reprehenderit
                            necessitatibus beatae odio totam?
                        </p>
                    </div>

                    <div className="col-md-6">
                        <p className="fs-3">
                            <i className="bi bi-bookmark-star p-3 text-danger"></i>Professional Drivers
                        </p>
                        <div
                            className="ms-5"
                            style={{ backgroundColor: 'rgb(230, 67, 67)', width: '4rem', height: '3px' }}
                        ></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
                            temporibus minus eius eligendi excepturi itaque adipisci nam explicabo
                            delectus aliquam.
                        </p>
                    </div>
                </div>

                <div className="row m-0 mt-5">
                    <div className="col-md-6">
                        <p className="fs-3">
                            <i className="bi bi-car-front-fill p-3 text-danger "></i>Big Fleet of Vehicles
                        </p>
                        <div
                            className="ms-5"
                            style={{ backgroundColor: 'rgb(230, 67, 67)', width: '4rem', height: '3px' }}
                        ></div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
                            aliquid rerum fugit voluptatum architecto maxime reprehenderit
                            necessitatibus beatae odio totam?
                        </p>
                    </div>

                    <div className="col-md-6">
                        <p className="fs-3">
                        <i className="bi bi-card-checklist text-danger "></i>
                           
                            Online Payment
                        </p>
                        <div
                            className="ms-5"
                            style={{ backgroundColor: 'rgb(230, 67, 67)', width: '4rem', height: '3px' }}
                        ></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
                            temporibus minus eius eligendi excepturi itaque adipisci nam explicabo
                            delectus aliquam.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;
