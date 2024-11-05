import { Box, Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const images = [
  'assets/image1.jpg',
  'assets/image2.jpg',
  'assets/image3.jpg',
];

const About: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const handleScroll = () => {
    if (parallaxRef.current) {
      const scrollTop = window.scrollY;

      // Limit the translation to prevent the text box from going out of view
      const maxTranslate = window.innerHeight / 2 - parallaxRef.current.clientHeight / 2;

      // Apply translation with a maximum cap
      const translateY = Math.min(scrollTop * 0.2, maxTranslate);

      parallaxRef.current.style.transform = `translateY(${translateY}px)`;
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <Box className="about-container" display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'center', md: 'flex-start' }}>
      {/* Carousel Section */}
      <Box className="carousel-container" flex={{ md: 1 }}>
        <Carousel>
          {images.map((image, index) => (
            <Paper key={index} className="carousel-paper">
              <img src={image} alt={`carousel-${index}`} className="carousel-image" />
            </Paper>
          ))}
        </Carousel>
      </Box>

      {/* About Text Section with Parallax Effect */}
      <Box className="about-text parallax-box" flex={{ md: 1 }} alignSelf="flex-start" style={{ top: '50%', transform: 'translateY(-50%)', position: 'fixed', left: '50%', transformOrigin: 'center' }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          Hi there curious wanderer! My name is Kalpesh and I'm currently wrapping up my last year at
          Rutgers University with a bachelor's degree in Computer Science. I have spent most of my waking
          hours in the past 4 years going to classes, coding, and gaming! I am particularly interested
          in the mathematical foundations of data science and machine learning and even more passionate
          about any chance I get to tutor or educate others in this field.
        </Typography>
        <Typography variant="body1" paragraph>
          I believe that anyone is capable of learning and teaching computer science, and that it is a special
          field that lies on the intersection of art, education, science, and technology. As a result,
          anyone can and should pickup some basic coding skills to improve their workflow.
        </Typography>
        <Typography variant="body1" paragraph>
          Some of the courses that I have taken in my educational career
          that I believe have most substantially influenced my pursuits are:

          <ul>
            <li>
              <Typography variant="body1">
                AP Language and Composition (@Edison High School)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Planetary Astronomy (@Middlesex County College)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                MA251 Multivariate Calculus (@Rutgers University)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
              MA252 Elementary Differential Equations (@Rutgers University)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                CS462 Deep Learning (@Rutgers University)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                CS439 Introduction to Data Science (@Rutgers University)
              </Typography>
            </li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default About;