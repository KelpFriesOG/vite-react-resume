// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import ExperienceLayout from './components/experiences/ExperienceLayout';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/experiences/academic"
          element={
            <ExperienceLayout
              title="Academic Experiences"
              content="Explore my academic journey, from coursework to projects."
              subPages={[
                {
                  name: 'Personal Projects',
                  description: 'CS projects that I have worked on for my own interests.',
                  link: '/experiences/academic/personal-projects',
                  image: '/images/research.jpg',
                },
                {
                  name: 'Coursework',
                  description: 'View detailed information about the courses I have taken.',
                  link: '/experiences/academic/coursework',
                  image: '/images/coursework.jpg',
                },
              ]}
            />
          }
        />
        <Route
          path="/experiences/hobbies"
          element={
            <ExperienceLayout
              title="Hobbies"
              content="Get to know my hobbies and how I spend my leisure time."
              subPages={[
                {
                  name: 'Gaming',
                  description: 'I never said I was good at gaming, but I love the process.',
                  link: '/experiences/hobbies/gaming',
                  image: '/images/photography.jpg',
                },
                {
                  name: 'Paper Trading',
                  description: 'Making money moves (with fake money).',
                  link: '/experiences/hobbies/paper-trading',
                  image: '/images/paper_trading.jpg',
                },
                {
                  name: 'Entertainment',
                  description: 'Learn about my favorite movies and TV shows.',
                  link: '/experiences/hobbies/entertainment',
                  image: '/images/music.jpg',
                },
                {
                  name: 'Reading',
                  description: 'Read about my favorite books and authors.',
                  link: '/experiences/hobbies/reading',
                  image: '/images/reading.jpg',
                },
              ]}
            />
          }
        />
        <Route
          path="/experiences/extracurricular"
          element={
            <ExperienceLayout
              title="Extracurricular Activities"
              content="Learn about the extracurricular activities that I am passionate about."
              subPages={[
                {
                  name: 'Religious Activities',
                  description: 'My experiences with Hindu religious activities and other faith related activities.',
                  link: '/experiences/extracurricular/religious-activities',
                  image: '/images/religious.jpg',
                },
                {
                  name: 'Clubs',
                  description: 'Clubs and societies I have been part of during my academic journey.',
                  link: '/experiences/extracurricular/clubs',
                  image: '/images/clubs.jpg',
                },
                {
                  name: 'Mentorship',
                  description: 'My experiences with mentorship and teaching.',
                  link: '/experiences/extracurricular/mentorship',
                  image: '/images/mentorship.jpg',
                }
              ]}
            />
          }
        />
        {/* Add individual routes for each subpage */}
        <Route path="/experiences/academic/personal-projects" element={<div>Projects Page</div>} />
        <Route path="/experiences/academic/coursework" element={<div>Coursework Page</div>} />
        <Route path="/experiences/hobbies/gaming" element={<div>Gaming Page</div>} />
        <Route path="/experiences/hobbies/paper-trading" element={<div>Paper Trading Page</div>} />
        <Route path="/experiences/hobbies/entertainment" element={<div>Entertainment Page</div>} />
        <Route path="/experiences/hobbies/reading" element={<div>Reading Page</div>} />
        <Route path="/experiences/extracurricular/religious-activities" element={<div>Religious Activities Page</div>} />
        <Route path="/experiences/extracurricular/clubs" element={<div>Clubs Page</div>} />
        <Route path="/experiences/extracurricular/mentorship" element={<div>Mentorship Page</div>} />
         
      </Routes>
    </Router>
  );
};

export default App;