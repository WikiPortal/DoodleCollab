import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isUserLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex justify-around p-3 items-center bg-[#1640D6]/90 text-zinc-300">
      <Link to="/">
        <h1 className="text-3xl">Doodle Collab</h1>
      </Link>
      <ul className="flex gap-6">
        {isUserLoggedIn ? (
          <>
            <Link to="/sketchbook">
              <li>Sketchbook</li>
            </Link>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <li>
              <button onClick={handleLogOut}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/register">
              <li>Signup</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/system';

// const StyledAppBar = styled(AppBar)({
//   zIndex: (theme) => theme.zIndex.drawer + 1,
//   position: 'sticky',
//   top: 0,
// });

// const Logo = styled(Typography)({
//   marginRight: (theme) => theme.spacing(2),
// });

// const Navbar = () => {
//   return (
//     <StyledAppBar>
//       <Toolbar>
//         <Logo variant="h6">Logo</Logo>
//         <Typography variant="h6" component="div">
//           Home
//         </Typography>
//         <Typography variant="h6" component="div">
//           Sketchbook
//         </Typography>
//       </Toolbar>
//     </StyledAppBar>
//   );
// };

// export default Navbar;
