import * as React from "react";
import {  AppBar,  Box,  Toolbar,  IconButton,  Typography,  Menu,  MenuItem,  Container,  Avatar,  Button,  Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Navigate, useNavigate } from "react-router-dom";
import Darkmode from "../../Darkmode/Darkmode";

import Logo from "../../assets/logo.png"

const pages = ["Home", "Sketchbook", "Blog"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleCloseUserMenu = (menuItem) => {
    setAnchorElUser(null);

    if (menuItem === "Logout") {
      handleLogout();
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Logo} alt="doodlecollab" />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile Pic" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={() => handleCloseUserMenu("")}
            >
              {isLoggedIn
                ? [
                    <MenuItem key="home" onClick={() => navigate("/")}>
                      <Typography textAlign="center">Home</Typography>
                    </MenuItem>,
                    <MenuItem key="logout" onClick={handleLogout}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>,
                  ]
                : [
                    <MenuItem key="login" onClick={handleLogin}>
                      <Typography textAlign="center">Login</Typography>
                    </MenuItem>,
                    <MenuItem
                      key="register"
                      onClick={() => navigate("/register")}
                    >
                      <Typography textAlign="center">Register</Typography>
                    </MenuItem>,
                  ]}
            </Menu>
          </Box>
          <Box sx={{ pl: 4, width: { xs: "100%", md: "auto" } }}>
            <Darkmode />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
