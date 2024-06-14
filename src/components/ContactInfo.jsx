import React from 'react';

const ContactInfo = () => {
  return (
    <div>
      <div className="d-flex border-bottom mb-4 pb-4">
        <i className="fas fa-map-marked-alt fa-4x text-primary bg-light p-3 rounded"></i>
        <div className="ps-3">
          <h5>Location</h5>
          <p>Kamu Kamu Building, Second Floor, Entebbe Road, suite F2</p>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-xl-6">
          <div className="d-flex">
            <i className="fas fa-tty fa-3x text-primary"></i>
            <div className="ps-3">
              <h5 className="mb-3">Quick Contact</h5>
              <div className="mb-3">
                <h6 className="mb-0">Phone:</h6>
                <a href="#" className="fs-5 text-primary">+256 704 368446</a>
              </div>
              <div className="mb-3">
                <h6 className="mb-0">Email:</h6>
                <a href="#" className="fs-5 text-primary">pleasursafaritours@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="d-flex">
            <i className="fas fa-clone fa-3x text-primary"></i>
            <div className="ps-3">
              <h5 className="mb-3">Opening Hrs</h5>
              <div className="mb-3">
                <h6 className="mb-0">Mon - Friday:</h6>
                <a href="#" className="fs-5 text-primary">09.00 am to 07.00 pm</a>
              </div>
              <div className="mb-3">
                <h6 className="mb-0">Satday:</h6>
                <a href="#" className="fs-5 text-primary">10.00 am to 05.00 pm</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center pt-3">
        <div className="me-4">
          <div className="bg-light d-flex align-items-center justify-content-center" style={{ width: '90px', height: '90px', borderRadius: '10px' }}>
            <i className="fas fa-share fa-3x text-primary"></i>
          </div>
        </div>
        <div className="d-flex">
          <a className="btn btn-secondary border-secondary me-2 p-0" href="">facebook <i className="fas fa-chevron-circle-right"></i></a>
          <a className="btn btn-secondary border-secondary mx-2 p-0" href="">twitter <i className="fas fa-chevron-circle-right"></i></a>
          <a className="btn btn-secondary border-secondary mx-2 p-0" href="">instagram <i className="fas fa-chevron-circle-right"></i></a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
