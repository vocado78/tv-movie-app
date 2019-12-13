/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase/FirebaseContext';
import { setAuthUser } from '../../actions';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
        if (authUser) this.props.setAuthUser(authUser);
        else this.props.setAuthUser(null);
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  WithAuthentication.propTypes = {
    firebase: PropTypes.object.isRequired,
    setAuthUser: PropTypes.func.isRequired
  };

  return compose(
    withFirebase,
    connect(
      null,
      { setAuthUser }
    )
  )(WithAuthentication);
};

export default withAuthentication;
