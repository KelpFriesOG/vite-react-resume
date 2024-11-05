// ExperienceLayout.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../styles/ExperienceLayout.css';

interface ExperienceLayoutProps {
  title: string;
  content: string;
  subPages: { name: string; description: string; link: string; image?: string }[];
}

const ExperienceLayout: React.FC<ExperienceLayoutProps> = ({ title, content, subPages }) => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom align="center">
        {title}
      </Typography>
      <Typography variant="body1" paragraph align="center">
        {content}
      </Typography>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={0}
        mt={3}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {subPages.map((subPage, index) => (
          <Box
            key={index}
            flexBasis={{ xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' }}
            maxWidth={{ xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' }}
            m={2}
          >
            <Link to={subPage.link} style={{ textDecoration: 'none' }}>
              <Card className="hover-card">
                {subPage.image && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={subPage.image}
                    alt={subPage.name}
                  />
                )}
                <CardContent className="card-content">
                  <Typography variant="h6" className="card-title">
                    {subPage.name}
                  </Typography>
                  <Typography variant="body2" className="card-description">
                    {subPage.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ExperienceLayout;
