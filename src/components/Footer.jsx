import React from 'react';
import '../style.css'; // Assuming you have the necessary CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Footer = () => {
    return (
        <div className="container-fluid copyright text-body py-4">
        <div className="container">
            <div className="row g-4 align-items-center">
                <div className="col-md-6 text-center text-md-end mb-md-0">
                    <i className="fas fa-copyright me-2"></i>
                    <a className="text-white" href="#">PLEASURE AND SAFARI TOURS UG.</a>, All rights reserved.
                </div>
                <div className="col-md-6 text-center text-md-start">
                
                    Designed By <a className="text-white" href="#">TREVOR</a>
                    
                </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;
