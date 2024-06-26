import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#5A20A4' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pleasure & Safari Tours
        </Typography>
        {isMobile ? (
          <div>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
            >
              <MenuItem onClick={closeMenu} component={NavLink} to="/">Home</MenuItem>
              <MenuItem onClick={closeMenu} component={NavLink} to="/aboutUs">About</MenuItem>
              <MenuItem onClick={closeMenu} component={NavLink} to="/services">Services</MenuItem>
              <MenuItem onClick={closeMenu} component={NavLink} to="/Blogs">Blogs</MenuItem>
              <MenuItem onClick={closeMenu} component={NavLink} to="/contact">Contact</MenuItem>
            </Menu>
          </div>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={NavLink} to="/" onClick={closeMenu}>Home</Button>
            <Button color="inherit" component={NavLink} to="/aboutUs" onClick={closeMenu}>About</Button>
            <Button color="inherit" component={NavLink} to="/services" onClick={closeMenu}>Services</Button>
            <Button color="inherit" component={NavLink} to="/Blogs" onClick={closeMenu}>Blogs</Button>
            <Button color="inherit" component={NavLink} to="/contact" onClick={closeMenu}>Contact</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
