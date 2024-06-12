// src/components/MeetOurGuide.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles.css'; 
import guide1 from '../assets/images/guide-1.jpg';
import guide2 from '../assets/images/guide-2.jpg';
import guide3 from '../assets/images/guide-3.jpg';
import guide4 from '../assets/images/guide-4.jpg';

const guides = [
  { img: guide1, name: 'Yvonne', designation: 'Senior Guide' },
  { img: guide2, name: 'Jane Smith', designation: 'Adventure Guide' },
  { img: guide3, name: 'Bob Johnson', designation: 'Cultural Guide' },
  { img: guide4, name: 'Alice Brown', designation: 'Nature Guide' },
];

const MeetOurGuide = () => {
  return (
    <div className="container-fluid guide py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
          <h5 className="section-title px-3">Travel Guide</h5>
          <h1 className="mb-0">Meet Our Guide</h1>
        </div>
        <div className="row g-4">
          {guides.map((guide, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img src={guide.img} className="img-fluid w-100 rounded-top" alt="Guide" />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a className="btn btn-square btn-primary rounded-circle mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-primary rounded-circle mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-primary rounded-circle mx-1" href="#"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-square btn-primary rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">{guide.name}</h4>
                    <p className="mb-0">{guide.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurGuide;
