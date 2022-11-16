/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const activeStyle = {
    backgroundColor: 'green',
  };
  return (
    <nav className="flex justify-center mb-5">
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className="px-5 py-4 bg-black rounded-md text-white text-2xl hover:text-white hover:bg-red-700"
      >
        Home
      </NavLink>
      <NavLink
        to="/example-one"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className="px-5 py-4 bg-black rounded-md text-white text-2xl mx-7 hover:text-white hover:bg-red-700"
      >
        useState#1
      </NavLink>
      <NavLink
        to="/example-two"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className="px-5 py-4 bg-black rounded-md text-white text-2xl hover:text-white hover:bg-red-700"
      >
        useState#2
      </NavLink>
    </nav>
  );
};

export default NavBar;
