import React from 'react';
import img1 from '../assets/img/office-3.jpg';
import img2 from '../assets/img/office-4.jpg';

const offices = [
  {
    country: 'United Kingdom',
    phone: '01234.567.890',
    email: 'travisa@example.com',
    address: '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.',
    image: img1,
  },
  {
    country: 'India',
    phone: '+123.45.67890',
    email: 'travisa@example.com',
    address: '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.',
    image: img2
  }
];

const OfficeLocations = () => {
  return (
    
    <div className="office pt-5">
      <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="sub-style">
          <h5 className="sub-title text-orange h3 px-3">Worldwide Offices</h5>
        </div>
        <h1 className="h1 text-purple mb-4">Explore Our Offices Worldwide</h1>
        
      </div>

      <div className="row g-4 justify-content-center">
        {offices.map((office, index) => (
          <div key={index} className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
            <div className="office-item p-4">
              <div className="office-img mb-4">
                <img src={office.image} className="img-fluid w-100 rounded" alt={`${office.country} Office`} />
              </div>
              <div className="office-content d-flex flex-column">
                <h4 className="mb-2">{office.country}</h4>
                <a href="#" className="text-secondary fs-5 mb-2">{office.phone}</a>
                <a href="#" className="text-muted fs-5 mb-2">{office.email}</a>
                <p className="mb-0">{office.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfficeLocations;
