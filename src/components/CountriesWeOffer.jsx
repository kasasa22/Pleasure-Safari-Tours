import React from 'react';
import country1 from '../assets/img/country-1.jpg'; // replace with the correct path
import country2 from '../assets/img/country-2.jpg'; // replace with the correct path
import country3 from '../assets/img/country-3.jpg'; // replace with the correct path
import country4 from '../assets/img/country-4.jpg'; // replace with the correct path
import brazil from '../assets/img/brazil.jpg'; // replace with the correct path
import india from '../assets/img/india.jpg'; // replace with the correct path
import usa from '../assets/img/usa.jpg'; // replace with the correct path
import italy from '../assets/img/italy.jpg'; // replace with the correct path

const CountriesWeOffer = () => {
  return (
    <div className="container-fluid country overflow-hidden padd">
      <div className="container padd">
        <div className="section-title text-center wow fadeInUp" data-wow-delay="0.1s" style={{ marginBottom: '70px' }}>
          <div className="sub-style">
            <h5 className="sub-title text-purple  px-3">Services WE OFFER</h5>
          </div>
          <h1 className="display-5 text-purple mb-4">Explore various  Countries Around the world</h1>
          
        </div>
        <div className="row g-4 text-center">
          <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="country-item">
              <div className="rounded overflow-hidden">
                <img src={country1} className="img-fluid w-100 rounded" alt="Brazil" />
              </div>
              <div className="country-flag">
                <img src={brazil} className="img-fluid rounded-circle" alt="Brazil" />
              </div>
              <div className="country-name">
                <a href="#" className="text-white fs-4">Brazil</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.3s">
            <div className="country-item">
              <div className="rounded overflow-hidden">
                <img src={country2} className="img-fluid w-100 rounded" alt="India" />
              </div>
              <div className="country-flag">
                <img src={india} className="img-fluid rounded-circle" alt="India" />
              </div>
              <div className="country-name">
                <a href="#" className="text-white fs-4">India</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.5s">
            <div className="country-item">
              <div className="rounded overflow-hidden">
                <img src={country3} className="img-fluid w-100 rounded" alt="USA" />
              </div>
              <div className="country-flag">
                <img src={usa} className="img-fluid rounded-circle" alt="USA" />
              </div>
              <div className="country-name">
                <a href="#" className="text-white fs-4">USA</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.7s">
            <div className="country-item">
              <div className="rounded overflow-hidden">
                <img src={country4} className="img-fluid w-100 rounded" alt="Italy" />
              </div>
              <div className="country-flag">
                <img src={italy} className="img-fluid rounded-circle" alt="Italy" />
              </div>
              <div className="country-name">
                <a href="#" className="text-white fs-4">Italy</a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">More Countries</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesWeOffer;
