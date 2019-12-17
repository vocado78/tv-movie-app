/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { setAuthUser } from '../../actions';

// TODO: only set uid on the store instead of entire user obj?

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.props.setAuthUser(JSON.parse(localStorage.getItem('authUser')));
    }

    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserChange((authUser) => {
        if (authUser) {
          localStorage.setItem('authUser', JSON.stringify(authUser));
          this.props.setAuthUser(authUser);
        } else {
          localStorage.removeItem('authUser');
          this.props.setAuthUser(null);
        }
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
