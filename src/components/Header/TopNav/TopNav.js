/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import List from '../../List/List';
import NavItem from '../../NavItem/NavItem';
import { LogoutButton } from '../../Auth';
import Button from '../../Button/Button';
import topNavItemsLeft from '../../../content/topNav';
import MODAL_IDS from '../../../constants/modalIds';
import ROUTES from '../../../constants/routes';
import LABELS from '../../../constants/buttonLabels';


export default function TopNav({ isLoggedIn, showModal }) {
  const itemClass = 'px-2 py-1 text-gray-400 uppercase tracking-widest text-sm hover:text-white active:text-white';
  const btnClass = 'px-2 py-1 text-gray-400 uppercase tracking-widest text-sm font-rubik hover:text-white active:text-white';
  return (
    <nav className="flex w-2/3 font-rubik">
      <List
        listClass="flex items-center"
        itemClass={itemClass}
        items={topNavItemsLeft}
        component={NavItem}
      />
      <ul className="flex items-center">
        {isLoggedIn ? [
          <NavItem className={itemClass} key="myprofile" label="My Profile" to={ROUTES.PROFILE} />,
          <LogoutButton key="logout" />
        ] : [
          <Button className={btnClass} key="signup" onClick={() => showModal(MODAL_IDS.SIGN_UP)} label={LABELS.CREATE_ACCOUNT} />,
          <Button className={btnClass} key="login" onClick={() => showModal(MODAL_IDS.LOG_IN)} label={LABELS.LOG_IN} />
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
