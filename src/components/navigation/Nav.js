import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navBar">
      <div className="logo-container">
        <img src={logo} alt="Cool logo." className="logo-img" width={60} height={60} />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
  );
};

export default Nav;
