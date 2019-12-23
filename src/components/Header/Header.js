/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from '../Container/Container';
import TopNav from './TopNav/TopNav';
import { showModal } from '../../actions';


export const Header = (props) => {
  const backgroundStyles = {
    backgroundColor: 'rgba(0,0,0,0.25)'
  };

  return (
    <header className="h-16 relative z-10" style={backgroundStyles}>
      <Container className="h-full items-center justify-between">
        <div className="mr-20 px-3 py-1 text-gray-400">LOGO</div>
        <TopNav isLoggedIn={props.auth} showModal={props.showModal} />
      </Container>
    </header>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { showModal })(Header);

Header.defaultProps = {
  auth: null
};

Header.propTypes = {
  auth: PropTypes.object,
  showModal: PropTypes.func.isRequired
};
