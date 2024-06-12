import React from 'react';
import '../styles.css'; 
import about from '../assets/img/about-2.png'; 
import about1 from '../assets/img/about-3.jpg'; 

import Header from '../components/Header';
import CountriesWeOffer from '../components/CountriesWeOffer'; 
import MeetOurGuide from '../components/MeetOurGuide';

const About = () => {
  return (
    <>
      <Header />
      <div className="container-fluid overflow-hidden py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="bg-light rounded">
                <img src={about} className="img-fluid w-100" style={{ marginBottom: '-7px' }} alt="Image" />
                <img src={about1} className="img-fluid w-100 border-bottom border-5 border-purple" style={{ borderTopRightRadius: '300px', borderTopLeftRadius: '300px' }} alt="Image" />
              </div>
            </div>
            <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
              <h5 className="sub-title pe-3 text-purple">About the company</h5>
              <h1 className="display-5 mb-4">We’re Trusted Tours and Travel Agency.</h1>
              <p className="mb-4">At <span className='text-purple'>Preasure and Safari </span>Tours, we specialize in crafting unforgettable travel experiences. From breathtaking adventures to relaxing getaways, our expertly curated tours cater to all types of travelers. Discover hidden gems, immerse yourself in diverse cultures, and create lasting memories with our personalized travel packages. Whether you’re seeking the thrill of exploration or the comfort of guided tours, we’re here to make your dream vacation a reality. Join us and embark on a journey of a lifetime!</p>
              <div className="row gy-4 align-items-center">
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <i className="fas fa-map-marked-alt fa-3x text-purple"></i>
                  <h5 className="ms-4">Best Travel Resources</h5>
                </div>
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <i className="fas fa-passport fa-3x text-purple"></i>
                  <h5 className="ms-4">Explore the country</h5>
                </div>
                <div className="col-4 col-md-3">
                  <div className="bg-light text-center rounded p-3">
                    <div className="mb-2">
                      <i className="fas fa-ticket-alt fa-4x text-purple"></i>
                    </div>
                    <h1 className="display-5 fw-bold mb-2">10</h1>
                    <p className="text-muted mb-0">Years of Experience</p>
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <div className="mb-5">
                    <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-purple me-2"></i> <span className="text-warning">Offer 100 % Genuine Assistance</span></p>
                    <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-purple me-2"></i> <span className="text-warning">It’s Faster & Reliable Execution</span></p>
                    <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-purple me-2"></i><span className="text-warning"> Accurate & Expert Advice</span></p>
                  </div>
                  <div className="d-flex flex-wrap">
                    <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                      <a href="" className="position-relative wow tada" data-wow-delay=".9s">
                        <i className="fa fa-phone-alt text-primary fa-3x"></i>
                        <div className="position-absolute" style={{ top: '0', left: '25px' }}>
                          <span><i className="fa fa-comment-dots text-secondary"></i></span>
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <span className="text-primary">Have any questions?</span>
                      <span className="text-secondary fw-bold fs-5" style={{ letterSpacing: '2px' }}>Call: +256 704 368446</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CountriesWeOffer /> 
      <MeetOurGuide />

    </>
  );
}

export default About;
