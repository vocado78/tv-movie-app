/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { showModal } from '../../actions';
import MODAL_IDS from '../Modal/modalIds';


const withAuthorisation = (Component) => {
  class WithAuthorisation extends React.Component {
    componentWillUnmount() {
      this.props.showModal(MODAL_IDS.SIGN_UP);
    }

    render() {
      return (
        this.props.authUser ? (<Component {...this.props} />) : (<Redirect to="/" />)
      );
    }
  }

  const mapStateToProps = (state) => {
    return { authUser: state.auth };
  };

  WithAuthorisation.defaultProps = {
    authUser: null
  };

  WithAuthorisation.propTypes = {
    firebase: PropTypes.object.isRequired,
    authUser: PropTypes.object,
    showModal: PropTypes.func.isRequired
  };

  return compose(
    withFirebase,
    connect(
      mapStateToProps,
      { showModal }
    )
  )(WithAuthorisation);
};

export default withAuthorisation;
