import React from 'react';
import '../style.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Services = () => {
  const servicesLeft = [
    {
      title: 'WorldWide Tours',
      description: 'Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.',
      icon: 'fa-globe',
    },
    {
      title: 'Hotel Reservation',
      description: 'Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.',
      icon: 'fa-hotel',
    },
    {
      title: 'Travel Guides',
      description: 'Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.',
      icon: 'fa-user',
    },
    {
      title: 'Event Management',
      description: 'Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.',
      icon: 'fa-cog',
    },
  ];

  const servicesRight = [
    {
      title: 'WorldWide Tours',
      description: 'Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.',
      icon: 'fa-globe',
    },
    {
      title: 'Hotel Reservation',
      description: 'Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.',
      icon: 'fa-hotel',
    },
    {
      title: 'Travel Guides',
      description: 'Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.',
      icon: 'fa-user',
    },
    {
      title: 'Event Management',
      description: 'Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.',
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
