import React from 'react';
import '../style.css'; 
import about from '../assets/images/about.jpg'; 
import aboutImg1 from '../assets/images/about-img-1.png'; 

const AboutUs = () => {
  return (
    <div className="container-fluid about py-5" style={{ backgroundImage:aboutImg1 }}>
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
          <div className="h-100" style={{ border: '50px solid', borderColor: 'transparent rgb(88 28 135) transparent rgb(88 28 135)' }}>
              <img src={about} className="img-fluid w-100 h-100" alt="About Us" />
            </div>
          </div>
          <div className="col-lg-7" style={{ background: `linear-gradient(rgb(233 213 255), rgba(255, 255, 255, .8)), url(${aboutImg1})` }}>
            <h5 className="section-about-title pe-3">About Us</h5>
            <h1 className="mb-4">Welcome to <span className="text-primary">Pleasure & Safari Tours</span></h1>
            <p className="mb-4">Your premier travel partner committed to turning your travel dreams into reality. With years of experience and a team of dedicated travel experts, we offer a comprehensive range of services tailored to meet the diverse needs of our clients.</p>
            <p className="mb-4"> Our mission is to provide seamless and memorable travel experiences, whether you're planning a family vacation, a business trip, or a spiritual journey. We offer the services below</p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Air Reservation and Ticketing</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Tour Packages</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Visa and passport Processing</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Hotel Reservations</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Airport Transfers</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Educational tours</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Religious Tous</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Bussiness tours</p>
              </div>
            </div>
            <a className="bg-purple-500  rounded-pill py-3 px-5 mt-2" href="">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
