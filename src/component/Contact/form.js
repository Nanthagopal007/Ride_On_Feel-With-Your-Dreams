import React from 'react';

export const Form = () => {
    return (
        <>


            <div className="row m-0 pt-4">
                <div className="col-md-6 px-5">
                    <label htmlFor="name" className="form-label">
                        Name<span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="name" />

                    <label htmlFor="email" className="form-label">
                        Email<span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="email" />

                    <label htmlFor="subject" className="form-label">
                        Subject
                    </label>
                    <input type="text" className="form-control" id="subject" />

                    <label htmlFor="message" className="form-label">
                        Message<span className="text-danger">*</span>
                    </label>
                    <textarea className="form-control" rows="8" id="message"></textarea>

                    <input
                        type="button"
                        value="Submit"
                        className="btn btn-danger text-white btn-lg mt-3 rounded-pill"
                    />
                </div>

                <div className="col-md-6 px-5">
                    <p className="fs-2">Get In Touch</p>
                    <div
                        style={{ backgroundColor: 'rgb(230, 67, 67)', width: '4rem', height: '3px' }}
                    ></div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime porro
                        illum ipsam ea repudiandae ipsa repellat pariatur consequuntur iusto, modi
                        eaque aperiam mollitia distinctio, culpa sed eum veritatis suscipit cum id
                        eius! Nemo obcaecati reiciendis eveniet consequuntur facere eaque cum
                        cupiditate vel corrupti natus ut, totam impedit?
                    </p>
                    <p className="fs-2">Contact Details</p>
                    <div
                        style={{ backgroundColor: 'rgb(230, 67, 67)', width: '5rem', height: '3px' }}
                    ></div>
                    <p className="border-bottom py-3">
                        <i className="bi bi-geo-alt-fill fs-5 p-2"></i>700 5th Avenue, New York City,
                        United States
                    </p>
                    <p className="border-bottom py-3">
                        <i className="bi bi-telephone-fill fs-5 p-2"></i>1800-11111-2222
                    </p>
                    <p className="border-bottom py-3">
                        <i className="bi bi-chat-left-fill fs-5 p-2"></i>Booking@example.com
                    </p>
                    <p className="fs-3">Social Media</p>
                    <div
                        style={{ backgroundColor: 'rgb(230, 67, 67)', width: '5rem', height: '3px' }}
                    ></div>
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item px-2">
                            <a href="#" className="nav-link">
                                <i className="bi bi-facebook text-danger"></i>
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a href="#" className="nav-link">
                                <i className="bi bi-instagram text-danger"></i>
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a href="#" className="nav-link">
                                <i className="bi bi-twitter text-danger"></i>
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a href="#" className="nav-link">
                                <i className="bi bi-pinterest text-danger"></i>
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a href="#" className="nav-link">
                                <i className="bi bi-youtube text-danger"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="m-2 pt-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3943.921044104884!2d77.71189867477653!3d8.699048191349682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726899863383!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
};

export default Form;
