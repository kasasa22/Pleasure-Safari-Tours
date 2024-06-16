import React, { useEffect, useState } from 'react';
import packageImg1 from '../assets/images/packages-1.jpg';
import packageImg2 from '../assets/images/packages-2.jpg';
import packageImg3 from '../assets/images/packages-3.jpg';
import packageImg4 from '../assets/images/packages-4.jpg';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from '../components/Header';

const images = {
  "packageImg1": packageImg1,
  "packageImg2": packageImg2,
  "packageImg3": packageImg3,
  "packageImg4": packageImg4
};

const Packages = () => {
  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setPackagesData(data.packages))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <Header/>
    <div className="container-fluid packages py-5">
      <div className="container py-5">
        
        <div className="packages-carousel owl-carousel">
          {packagesData.map((pkg) => (
            <div className="packages-item" key={pkg.id}>
              <div className="packages-img">
                <img src={images[pkg.image]} className="img-fluid w-100 rounded-top" alt={pkg.title} />
                <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: 0, left: 0, zIndex: 5 }}>
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2"></i>{pkg.location}</small>
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2"></i>{pkg.days}</small>
                  <small className="flex-fill text-center py-2"><i className="fa fa-user me-2"></i>{pkg.persons}</small>
                </div>
                <div className="packages-price py-2 px-4">{pkg.price}</div>
              </div>
              <div className="packages-content bg-light">
                <div className="p-4 pb-0">
                  <h5 className="mb-0">{pkg.title}</h5>
                  <small className="text-uppercase">{pkg.category}</small>
                  <div className="mb-3">
                    {[...Array(pkg.rating)].map((_, i) => (
                      <small key={i} className="fa fa-star text-primary"></small>
                    ))}
                  </div>
                  <p className="mb-4">{pkg.description}</p>
                </div>
                <div className="row bg-primary rounded-bottom mx-0">
                  <div className="col-6 text-start px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">Read More</a>
                  </div>
                  <div className="col-6 text-end px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Packages;
