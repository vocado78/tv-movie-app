/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { showModal } from '../../../actions';
import MODAL_IDS from '../../../constants/modalIds';
import ROUTES from '../../../constants/routes';


const withAuthorisation = (Component) => {
  class WithAuthorisation extends React.Component {
    componentWillUnmount() {
      this.props.showModal(MODAL_IDS.SIGN_UP);
    }

    render() {
      return (
        this.props.authUser ? (<Component {...this.props} />) : (<Redirect to={ROUTES.HOME} />)
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
    authUser: PropTypes.object,
    showModal: PropTypes.func.isRequired
  };

  return compose(
    connect(
      mapStateToProps,
      { showModal }
    )
  )(WithAuthorisation);
};

export default withAuthorisation;
