import React from 'react';
import Header from '../components/Header';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import OfficeLocations from '../components/OfficeLocations';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles.css';

const ContactPage = () => {
  return (
    <>
      <Header />
    <div className="container-fluid contact overflow-hidden py-5">
      <div className="container py-5">
        <div className="row g-5 mb-5">
          {/* Left Column */}
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
            <div className="sub-style">
              <h5 className="sub-title text-purple pe-3">Quick Contact</h5>
            </div>
            <h1 className="display-5 mb-4">Have Questions? Don't Hesitate to Contact Us</h1>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat totam deserunt tempora. Tempore neque necessitatibus corporis error earum sint quae?</p>
            <ContactInfo />
          </div>

          {/* Right Column */}
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
            <div className="sub-style">
              <h5 className="sub-title text-purple pe-3">Let’s Connect</h5>
            </div>
            <h1 className="display-5 mb-4">Send Your Message</h1>
           
            <ContactForm />
          </div>
        </div>

        {/* Office Locations Section */}
        <OfficeLocations />
        
      </div>
    </div>
    </>
  );
}

export default ContactPage;
