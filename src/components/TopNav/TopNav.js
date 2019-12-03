import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import List from '../List/List';
import NavItem from '../NavItem/NavItem';
import topNavItemsLeft from '../../content/topNav';
import { showModal } from '../../actions';
import MODAL_IDS from '../Modal/modalIds';

// TODO: modal triggers should be buttons, not links
export const PureTopNav = (props) => {
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
        {props.isLoggedIn ? [
          <NavItem className={itemClass} key="myprofile" label="My Profile" to="/myprofile/" />,
          <NavItem className={itemClass} key="logout" label="Log Out" to="/" />
        ] : [
          <NavItem className={itemClass} key="signup" onClick={() => props.showModal(MODAL_IDS.SIGN_UP)} label="Sign Up" to="#" />,
          <NavItem className={itemClass} key="login" onClick={() => props.showModal(MODAL_IDS.LOG_IN)} label="Log In" to="#" />
        ]}
      </ul>
    </nav>
  );
};

export default connect(null, { showModal })(PureTopNav);

PureTopNav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired
};
