import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <div>
      <StyledHeader>
        <NavLink className="header-nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-nav-link" to="/movies">
          Movies
        </NavLink>
      </StyledHeader>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
