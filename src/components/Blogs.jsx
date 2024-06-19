import React from 'react';
import blogImg1 from '../assets/images/zoo.jpeg';
import blogImg2 from '../assets/images/fun.jpeg';
import blogImg3 from '../assets/images/blog-3.jpg';
import '../style.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const blogData = [
    {
        id: 1,
        image: blogImg1,
        date: '28 Jan 2020',
        likes: '1.7K',
        comments: '1K',
        author: 'Derox_ug',
        title: 'Adventures Trip',
        description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos'
    },
    {
        id: 2,
        image: blogImg2,
        date: '28 Jan 2050',
        likes: '1.7K',
        comments: '1K',
        author: 'Royal Hamblin',
        title: 'Adventures Trip',
        description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos'
    },
    {
        id: 3,
        image: blogImg3,
        date: '28 Jan 2050',
        likes: '1.7K',
        comments: '1K',
        author: 'Royal Hamblin',
        title: 'Adventures Trip',
        description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos'
    },
];

const Blogs = () => {
    return (
        <div className="container-fluid blog py-5">
            <div className="container py-5">
                <div className="mx-auto text-center" style={{ maxWidth: '900px' }}>
                    <h5 className="section-title h1  px-3" style={{ color: 'purple' }}>Our Blogs</h5>
                    <h1 className="mb-4 h3" style={{ color:'orange' }}>Popular <span className="text-purple">Travel</span> Blogs</h1>
                   
                </div>
                <div className="row g-4 justify-content-center">
                    {blogData.map((blog) => (
                        <div className="col-lg-4 col-md-6" key={blog.id}>
                            <div className="blog-item">
                                <div className="blog-img">
                                    <div className="blog-img-inner">
                                        <img className="img-fluid w-100 rounded-top" src={blog.image} alt="Image" />
                                        <div className="blog-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                    <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-purple me-2"></i>{blog.date}</small>
                                        <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-purple me-2"></i>{blog.likes}</a>
                                        <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-purple me-2"></i>{blog.comments}</a>
                                    </div>
                                </div>
                                <div className="blog-content border border-top-0 rounded-bottom p-4">
                                    <p className="mb-3">Posted By: {blog.author} </p>
                                    <a href="#" className="h4 text-purple">{blog.title}</a>
                                    <p className="my-3">{blog.description}</p>
                                    <a href="#" className="btn bg-orange text-white  border-secondary rounded-pill py-3 px-5" >Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
