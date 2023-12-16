import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  zIndex: (theme) => theme.zIndex.drawer + 1,
  position: 'sticky',
  top: 0,
});

const Logo = styled(Typography)({
  marginRight: (theme) => theme.spacing(2),
});

const Navbar = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <Logo variant="h6">Logo</Logo>
        <Typography variant="h6" component="div">
          Home
        </Typography>
        <Typography variant="h6" component="div">
          Sketchbook
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
