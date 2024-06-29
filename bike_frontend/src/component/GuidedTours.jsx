import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { AppBar, Toolbar, Typography, IconButton, Card, CardContent, CardMedia, Button, Grid, Container, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './GuidedTours.css';

const GuidedTours = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bikeTours = [
    {
      id: 1,
      route: 'Leh Ladakh',
      description: 'Duration: 7 days',
      image: 'https://www.trekkinginindia.com/images/cycling-tours-.jpg',
    },
    {
      id: 2,
      route: 'Delhi',
      description: 'Duration: 9 days',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c4/17/85/caption.jpg?w=1200&h=-1&s=1',
    },
    {
      id: 3,
      route: 'Simla',
      description: 'Duration: 5 days',
      image: 'https://www.bpmcdn.com/f/files/fernie/import/2020-11/23295732_web1_201119-FFP-FatBiking-fg_2.jpg',
    },
    {
      id: 4,
      route: 'Kerala',
      description: 'Duration: 7 days',
      image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/01/a5/fb.jpg',
    },
  ];

  const handleNextTour = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bikeTours.length);
  };

  const handlePreviousTour = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bikeTours.length) % bikeTours.length);
  };

  return (
    <div className="guided-tours-container">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Guided Tours</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <Typography variant="h4" align="center" gutterBottom>Discover hidden gems with our experienced guides</Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item>
              <IconButton onClick={handlePreviousTour} className="arrow-button">
                <ArrowBackIosIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Card className="tour-card">
                <CardMedia
                  component="img"
                  alt={bikeTours[currentIndex].route}
                  height="300"
                  image={bikeTours[currentIndex].image}
                />
                <CardContent>
                  <Typography variant="h5">{bikeTours[currentIndex].route}</Typography>
                  <Typography variant="body2" color="textSecondary">{bikeTours[currentIndex].description}</Typography>
                  <Button variant="contained" color="primary" component={Link} to={`/guided-tours/${bikeTours[currentIndex].id}`} className="view-details-button">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <IconButton onClick={handleNextTour} className="arrow-button">
                <ArrowForwardIosIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Box my={4}>
          <Typography variant="h5" gutterBottom>How to Use This</Typography>
          <Typography variant="body1" paragraph>Welcome to our Guided Tours platform! Here's a quick guide on how to use this app:</Typography>
          <ol>
            <Typography variant="body1" component="li">Browse through the list of available tours by clicking on the left and right arrow buttons to navigate between tours.</Typography>
            <Typography variant="body1" component="li">Click on the tour image or the "View Details" button to learn more about a specific tour.</Typography>
            <Typography variant="body1" component="li">Once you've found a tour you're interested in, click on the "View Details" button to see more information and book your spot.</Typography>
            <Typography variant="body1" component="li">Fill out the necessary information and follow the instructions to complete your booking.</Typography>
            <Typography variant="body1" component="li">After booking, you'll receive a confirmation email with all the details of your tour.</Typography>
            <Typography variant="body1" component="li">Get ready for an exciting adventure and make sure to arrive at the designated meeting point on time!</Typography>
          </ol>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default GuidedTours;
