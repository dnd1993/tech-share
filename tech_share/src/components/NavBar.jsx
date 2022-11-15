/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };
  return (
    <nav className="flex justify-center">
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/example-one"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className="mx-5"
      >
        useState#1
      </NavLink>
      <NavLink
        to="/example-two"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        useState#2
      </NavLink>
    </nav>
  );
};

export default NavBar;
