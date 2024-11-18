export const Footer = () => {
  return (
    <footer className="row m-0 bg-dark text-white pt-5 pb-5 mt-5">
      <div className="col"></div>
      <div className="col-lg-4">
        <p className="fs-2">ABOUT US</p>
        <div style={{ backgroundColor: 'rgb(230, 67, 67)', width: '5rem', height: '2px' }}></div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui sequi odio eligendi laboriosam fuga, vitae aliquid architecto in fugit voluptatibus quisquam adipisci quasi quo dolor a! Aliquam totam recusandae accusamus ab unde harum commodi itaque laborum voluptatum incidunt repellat vel.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam magni voluptatibus unde quos ipsum sint suscipit animi, repudiandae ex laudantium ut commodi officiis! Sunt molestiae, vero enim alias animi sed sit distinctio delectus modi voluptatem consectetur voluptate nihil voluptatibus.</p>
      </div>
      <div className="col-lg-3">
        <p className="fs-2">NEWSLETTER</p>
        <div style={{ backgroundColor: 'rgb(230, 67, 67)', width: '5rem', height: '2px' }}></div>
        <p>Subscribe to our newsletters for news, updates, discounts, and offers.</p>
        <input type="text" className="form-control" placeholder="Enter your email" />
        <br />
        <input type="button" value="Subscribe" className="btn bg-danger text-white rounded-pill btn-lg" style={{ border: 0 }} />
      </div>
      <div className="col-lg-3">
        <p className="fs-2">CONTACT DETAILS</p>
        <div style={{ backgroundColor: 'rgb(230, 67, 67)', width: '5rem', height: '2px' }}></div>
        <p><i className="bi bi-geo-alt-fill fs-5 p-2"></i>700 5th Avenue, New York City, United States</p>
        <p><i className="bi bi-telephone-fill fs-5 p-2"></i>1800-11111-2222</p>
        <p><i className="bi bi-chat-left-fill fs-5 p-2"></i>Booking@example.com</p>
      </div>
      <div className="col"></div>
      <hr />
      <p className="d-flex justify-content-center">@2024 BrassyAcademy. All Rights Reserved</p>
    </footer>
  )
}
export default Footer;
