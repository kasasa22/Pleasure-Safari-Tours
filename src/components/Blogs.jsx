import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import blogImg1 from '../assets/images/zoo.jpeg';
import blogImg2 from '../assets/images/fun.jpeg';
import blogImg3 from '../assets/images/blog-3.jpg';

const blogData = [
    {
        id: 1,
        image: blogImg1,
        date: '28 Jan 2021',
        likes: '1.7K',
        comments: '1K',
        author: 'Derox_ug',
        title: 'Adventures Trip',
        description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos'
    },
    {
        id: 2,
        image: blogImg2,
        date: '28 Dec 2022',
        likes: '1.7K',
        comments: '1K',
        author: 'Royal Hamblin',
        title: 'Water Activities',
        description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos'
    },
    {
        id: 3,
        image: blogImg3,
        date: '12 Jun 2050',
        likes: '1.7K',
        comments: '1K',
        author: 'Royal Hamblin',
        title: 'Moutain Climbing',
        description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos'
    },
];

const Blogs = () => {
    return (
        <Box sx={{ py: 5, backgroundColor: 'background.default' }}>
            <Container sx={{ py: 5 }}>
                <Box sx={{ textAlign: 'center', mb: 5, maxWidth: 900, mx: 'auto' }}>
                    <Typography variant="h5" component="div" color="primary" gutterBottom>
                        Our Blogs
                    </Typography>
                    <Typography variant="h3" component="div" color="secondary">
                        Popular <span style={{ color: 'purple' }}>Travel</span> Blogs
                    </Typography>
                </Box>
                <Grid container spacing={4} justifyContent="center">
                    {blogData.map((blog) => (
                        <Grid item xs={12} sm={6} md={4} key={blog.id}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    component="img"
                                    image={blog.image}
                                    alt={blog.title}
                                    sx={{ height: 200, objectFit: 'cover' }}
                                />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, borderTop: '1px solid rgba(0, 0, 0, 0.12)', borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        <i className="fa fa-calendar-alt text-purple me-2"></i>{blog.date}
                                    </Typography>
                                    <Box>
                                        <Button size="small" color="primary">
                                            <i className="fa fa-thumbs-up text-purple me-2"></i>{blog.likes}
                                        </Button>
                                        <Button size="small" color="primary">
                                            <i className="fa fa-comments text-purple me-2"></i>{blog.comments}
                                        </Button>
                                    </Box>
                                </Box>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Posted By: {blog.author}
                                    </Typography>
                                    <Typography variant="h5" component="div" color="primary" gutterBottom>
                                        {blog.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {blog.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="large" variant="contained" color="secondary" fullWidth>
                                        Read More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Blogs;
