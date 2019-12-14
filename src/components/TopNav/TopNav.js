/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import List from '../List/List';
import NavItem from '../NavItem/NavItem';
import topNavItemsLeft from '../../content/topNav';
import MODAL_IDS from '../Modal/modalIds';
import { Logout } from '../Auth';

// TODO: modal triggers should be buttons, not links
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
          <NavItem className={itemClass} key="myprofile" label="My Profile" to="/myprofile/" />,
          <Logout className={itemClass} key="logout" />
        ] : [
          <NavItem className={itemClass} key="signup" onClick={() => showModal(MODAL_IDS.SIGN_UP)} label="Sign Up" to="#" />,
          <NavItem className={itemClass} key="login" onClick={() => showModal(MODAL_IDS.LOG_IN)} label="Log In" to="#" />
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
