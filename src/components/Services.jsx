import React from 'react';
import '../styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Services = () => {
  const servicesLeft = [
    {
      title: 'Air Reservation and Ticketing',
      description: 'We take the hassle out of booking flights by offering reliable air reservation and ticketing services. Whether you\'re flying domestically or internationally, we\'ve got you covered.',
      icon: 'fa-globe',
    },
    {
      title: 'Tour Packages',
      description: ' Discover the world with our meticulously crafted tour packages. From adventure tours to relaxing getaways, we cater to all types of travelers.',
      icon: 'fa-hotel',
    },
    {
      title: 'Visa and Passport Processing',
      description: 'Navigating the complexities of visa and passport applications can be daunting. Our expert team is here to ensure a smooth and efficient process.',
      icon: 'fa-hotel',
    },
    {
      title: 'Hotel Reservations',
      description:' Finding the perfect accommodation is crucial for a great trip. We offer hotel reservation services that match your preferences and budget.',
      icon: 'fa-hotel',
    },
  ];

  const servicesRight = [
    {
      title: 'Airport Transfers',
      description: 'Start your journey stress-free with our reliable airport transfer services, ensuring you get to and from the airport comfortably and on time.',
      icon: 'fa-hotel',
    },
    {
      title: 'Educational Tours',
      description: ' Enhance your learning experience with our educational tours, designed to provide enriching and informative travel experiences for students and educators alike.',
      icon: 'fa-hotel',
    },
    {
      title: 'Religious Tours',
      description: ' Embark on a spiritual journey with our specially curated religious tours, tailored to help you explore and deepen your faith.',
      icon: 'fa-user',
    },
    {
      title: 'Cruise Bookings',
      description: 'Set sail on an unforgettable adventure with our cruise booking services, offering a variety of destinations and cruise lines to choose from.',
      icon: 'fa-cog',
    },
  ];

  const renderService = (service, isRight) => (
    <div className="col-12" key={service.title}>
      <div className={`service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ${isRight ? 'ps-0' : 'pe-0'}`}>
        <div className="service-icon p-4">
          <i className={`fa ${service.icon} fa-4x text-primary`}></i>
        </div>
        <div className={`service-content ${isRight ? '' : 'text-end'}`}>
          <h5 className="mb-4">{service.title}</h5>
          <p className="mb-0">{service.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid bg-light service py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
          <h5 className="section-title px-3">Services</h5>
          <h1 className="mb-0">Our Services</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="row g-4">
              {servicesLeft.map(service => renderService(service, false))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-4">
              {servicesRight.map(service => renderService(service, true))}
            </div>
          </div>
          <div className="col-12">
            <div className="text-center">
              <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Service More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
