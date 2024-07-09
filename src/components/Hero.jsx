import React from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure to import the Bootstrap JS
import carousel from '../assets/images/carousel-2.jpg'; 
import carousel1 from '../assets/images/ticket.jpg'; 
import carousel3 from '../assets/images/water.jpg'; 
import airticket from '../assets/images/tour.jpeg'; 

const Hero = () => {
  return ( 
    <div>
      <div className="carousel-header">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={airticket} className="img-fluid" alt="Image 1" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: "3px" }}>Navigate The World</h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">Let's Guide you around the world</h1>
                  <p className="mb-5 fs-5">let's go to various areas of interest around the world and explore as we learn</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn-hover-bg bg-purple-500  rounded-pill text-white py-3 px-5" href="#">Generate Quote</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carousel1} className="img-fluid" alt="Image 2" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: "3px" }}>Explore The World</h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">Quick and Faster ticket and visa Processing</h1>
                  <p className="mb-5 fs-5">DISCOVER. EXPLORE. EMBRACE </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn-hover-bg bg-purple-500  rounded-pill text-white py-3 px-5" href="#">Generate Quote</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carousel3} className="img-fluid" alt="Image 3" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: "3px" }}>Tour The World</h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">Have fun with us!</h1>
                  <p className="mb-5 fs-5">enjoy various activities with us in different places around the world. 
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn-hover-bg bg-purple-500 rounded-pill text-white py-3 px-5" href="#">Generate Quote</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-purple-500" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span className="carousel-control-next-icon btn bg-purple-500" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
