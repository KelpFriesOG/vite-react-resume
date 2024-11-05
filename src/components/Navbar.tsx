// Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary" className='navbar'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Kalpesh Chavan
          </Link>
        </Typography>
        <Box>

        <Button color="inherit" onClick={handleMenuClick} startIcon={<MenuIcon />}>Experiences</Button>
          <Menu
            anchorEl={anchorEl as HTMLElement | null}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/experiences/academic">
              Academic
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/experiences/hobbies">
              Hobbies
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/experiences/extracurricular">
              Extracurricular
            </MenuItem>
          </Menu>

          <Button color="inherit">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
              About
            </Link>
          </Button>
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
