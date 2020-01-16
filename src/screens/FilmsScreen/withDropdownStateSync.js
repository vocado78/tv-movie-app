/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { setActiveGenre, setActiveDecade, clearActiveDropdowns } from '../../actions';

// syncs dropdown state with url params if user uses browser back/forward navigation
// and clears dropdown state when navigating away from any path without film params

const withDropdownStateSync = (Component) => {
  class WithDropdownStateSync extends React.Component {
    componentDidMount() {
      this.syncStateWithParams();
    }

    componentDidUpdate() {
      this.syncStateWithParams();
    }

    componentWillUnmount() {
      const { history: { location: { pathname } } } = this.props;

      if (!pathname.includes('genre') && !pathname.includes('decade')) {
        this.props.clearActiveDropdowns();
      }
    }

    syncStateWithParams = () => {
      const { genre, decade, match: { params } } = this.props;

      if (params.genre && params.genre !== genre) {
        this.props.setActiveGenre(params.genre);
      }

      if (params.decade && params.decade !== decade) {
        this.props.setActiveDecade(params.decade);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      genre: state.dropdowns.activeGenre,
      decade: state.dropdowns.activeDecade
    };
  };

  WithDropdownStateSync.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    genre: PropTypes.string.isRequired,
    decade: PropTypes.string.isRequired,
    setActiveGenre: PropTypes.func.isRequired,
    setActiveDecade: PropTypes.func.isRequired,
    clearActiveDropdowns: PropTypes.func.isRequired
  };

  return compose(
    withRouter,
    connect(
      mapStateToProps,
      { setActiveGenre, setActiveDecade, clearActiveDropdowns }
    )
  )(WithDropdownStateSync);
};

export default withDropdownStateSync;
