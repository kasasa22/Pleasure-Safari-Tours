import React from 'react';
import { Container, Box, Typography, Tabs, Tab, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import galleryImg1 from '../assets/img/yvone.jpg';
import galleryImg2 from '../assets/img/yvone.jpg';
import galleryImg3 from '../assets/img/yvone.jpg';
// Add more images as needed

const galleryData = [
    { id: 1, category: 'World Tour', image: galleryImg1 },
    { id: 2, category: 'World Tour', image: galleryImg2 },
    { id: 3, category: 'World Tour', image: galleryImg3 },
    // Add more items as needed
];

const categories = ['All', 'World Tour', 'Ocean Tour', 'Summer Tour', 'Sport Tour'];

const Gallery = () => {
    const [value, setValue] = React.useState('All');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const filteredData = value === 'All' ? galleryData : galleryData.filter(item => item.category === value);

    return (
        <Box sx={{ py: 5 }}>
            <Container>
                <Box sx={{ textAlign: 'center', mb: 5, maxWidth: 900, mx: 'auto' }}>
                    <Typography variant="h5" component="div" gutterBottom>
                        Our Gallery
                    </Typography>
                    <Typography variant="h3" component="div">
                        Tourism & Traveling Gallery
                    </Typography>
                    <Typography variant="body1" component="div" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo?
                    </Typography>
                </Box>
                <TabContext value={value}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        centered
                        textColor="primary"
                        indicatorColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                    >
                        {categories.map((category, index) => (
                            <Tab key={index} label={category} value={category} />
                        ))}
                    </Tabs>
                    <TabPanel value={value}>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            {filteredData.map((item) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                                    <Card sx={{ position: 'relative' }}>
                                        <CardMedia component="img" height="200" image={item.image} alt={item.category} />
                                        <CardContent sx={{ position: 'absolute', bottom: 0, left: 0, color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', width: '100%' }}>
                                            <Typography variant="h6">{item.category}</Typography>
                                            <Button variant="text" sx={{ color: 'white' }}>
                                                View All Place <AddIcon />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>
                </TabContext>
            </Container>
        </Box>
    );
};

export default Gallery;
