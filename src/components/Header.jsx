// src/components/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles.css'; 
import headerimg from '../assets/img/breadcrumb.png'; 

const Header = () => {
  return (
    <div className="container-fluid bg-breadcrumb" style={{backgroundImage: `url(${headerimg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
        <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Services</h3>
        <ol className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown" data-wow-delay="0.3s">
          <li className="breadcrumb-item">
            <a href="index.html" className="text-white">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="text-white">Pages</a>
          </li>
          <li className="breadcrumb-item active text-secondary">Services</li>
        </ol>
      </div>
    </div>
  );
};

export default Header;
