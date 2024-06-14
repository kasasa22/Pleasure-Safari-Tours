import React from 'react';
import blogImg1 from '../assets/images/zoo.jpeg';
import blogImg2 from '../assets/images/fun.jpeg';
import blogImg3 from '../assets/images/blog-3.jpg';
import '../style.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

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
                <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                    <h5 className="section-title px-3">Our Blog</h5>
                    <h1 className="mb-4">Popular Travel Blogs</h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque. Magni non explicabo beatae sit, vel reiciendis consectetur numquam id similique sunt error obcaecati ducimus officia maiores.</p>
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
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>{blog.date}</small>
                                        <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2"></i>{blog.likes}</a>
                                        <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2"></i>{blog.comments}</a>
                                    </div>
                                </div>
                                <div className="blog-content border border-top-0 rounded-bottom p-4">
                                    <p className="mb-3">Posted By: {blog.author} </p>
                                    <a href="#" className="h4">{blog.title}</a>
                                    <p className="my-3">{blog.description}</p>
                                    <Link to="/about" className="btn btn-primary rounded-pill py-2 px-4">Read More</Link>
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
