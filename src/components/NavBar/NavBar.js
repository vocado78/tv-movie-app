import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import NavList from '../NavList/NavList';
import NavItem from '../NavItem/NavItem';


export default function NavBar({ isLoggedIn }) {
  const defaultClass = 'px-3 py-1 text-gray-600';

  return (
    <nav className="flex justify-between w-240 h-16 my-0 mx-auto bg-gray-200 relative">
      <NavList className="flex items-center list-none">
        <NavItem className={defaultClass} label="Films" to="/films/" />
        <NavItem className={defaultClass} label="TV-shows" to="/tv-shows/" />
        <NavItem className={defaultClass} label="Lists" to="/lists/" />
        <NavItem className={defaultClass} label="Discussions" to="/discussions/" />
      </NavList>
      <div className="absolute inset-1/2">LOGO</div>
      <NavList className="flex items-center list-none">
        {
          isLoggedIn ? [
            <NavItem className={defaultClass} label="My Profile" to="/myprofile/" />,
            <NavItem className="btn btn-primary mx-3" label="Log Out" to="/" />
          ] : [
            <NavItem className="btn btn-primary mr-6" label="Sign Up" to="/signup/" />,
            <NavItem className="btn btn-secondary mr-3" label="Log In" to="/login/" />
          ]
        }
      </NavList>
    </nav>
  );
}

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool
};

NavBar.defaultProps = {
  isLoggedIn: false
};
