import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid, Box, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import blogImg1 from '../assets/images/zoo.jpeg';
import blogImg2 from '../assets/images/fun.jpeg';
import blogImg3 from '../assets/images/blog-3.jpg';
import Header from '../components/Header';

const images = {
  "blogImg1": blogImg1,
  "blogImg2": blogImg2,
  "blogImg3": blogImg3
};

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data.blogs);  // Add this line to debug
        setBlogData(data.blogs);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ py: 5, bgcolor: 'background.paper' }}>
        <Grid container spacing={4} justifyContent="center">
          {blogData.map((blog) => (
            <Grid item key={blog.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={images[blog.image]}
                  alt="blog image"
                  sx={{ height: 200 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 1.5 }}>
                    <CalendarTodayIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                    {blog.date}
                  </Typography>
                  <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1.5 }}>
                    Posted By: {blog.author}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {blog.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton size="small" color="primary">
                      <ThumbUpIcon />
                      <Typography variant="body2" sx={{ ml: 0.5 }}>{blog.likes}</Typography>
                    </IconButton>
                    <IconButton size="small" color="primary">
                      <CommentIcon />
                      <Typography variant="body2" sx={{ ml: 0.5 }}>{blog.comments}</Typography>
                    </IconButton>
                  </Box>
                </CardContent>
                <Box sx={{ px: 2, pb: 2 }}>
                  <Link to="/about" style={{ textDecoration: 'none' }}>
                    <Typography variant="button" color="primary">Read More</Typography>
                  </Link>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Blogs;
