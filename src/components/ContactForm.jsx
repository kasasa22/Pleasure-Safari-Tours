import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <div className="row g-4">
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input type="text" className="form-control" id="name" placeholder="Your Name" />
            <label htmlFor="name">Your Name</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input type="email" className="form-control" id="email" placeholder="Your Email" />
            <label htmlFor="email">Your Email</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input type="phone" className="form-control" id="phone" placeholder="Phone" />
            <label htmlFor="phone">Your Phone</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input type="text" className="form-control" id="project" placeholder="Project" />
            <label htmlFor="project">Your Project</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input type="text" className="form-control" id="subject" placeholder="Subject" />
            <label htmlFor="subject">Subject</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '160px' }}></textarea>
            <label htmlFor="message">Message</label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary bg-orange w-100 py-3" style={{ backgroundColor:'orange' }}>Send Message</button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
