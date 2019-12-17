/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import List from '../../List';
import NavItem from '../../NavItem';
import { LogoutButton } from '../../Auth';
import Button from '../../Button';
import topNavItemsLeft from '../../../content/topNav';
import { MODAL_IDS } from '../../Modal';


export default function TopNav({ isLoggedIn, showModal }) {
  const itemClass = 'px-3 py-1 text-gray-400';

  return (
    <nav className="flex w-2/3">
      <List
        listClass="flex"
        itemClass={itemClass}
        items={topNavItemsLeft}
        component={NavItem}
      />
      <ul className="flex">
        {isLoggedIn ? [
          <NavItem className={itemClass} key="myprofile" label="My Profile" to="/profile/" />,
          <LogoutButton key="logout" />
        ] : [
          <Button className="btn btn-primary" key="signup" onClick={() => showModal(MODAL_IDS.SIGN_UP)} label="Create Account" />,
          <Button className="btn btn-secondary" key="login" onClick={() => showModal(MODAL_IDS.LOG_IN)} label="Log In" />
        ]}
      </ul>
    </nav>
  );
}

TopNav.defaultProps = {
  isLoggedIn: null
};

TopNav.propTypes = {
  isLoggedIn: PropTypes.object,
  showModal: PropTypes.func.isRequired
};
