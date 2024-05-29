import { AppBar, Toolbar } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
      <AppBar elevation={0} position="sticky">
        <Toolbar>
          <Link to={"/"}>Home</Link>
          <Link to={"/users"}>Users</Link>
          <Link to={"/users"}>Login</Link>
          <Link to={"/users"}>Register</Link>
        </Toolbar>
      </AppBar>
    );
}

export default NavBar