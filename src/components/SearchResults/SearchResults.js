import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withDropdownStateSync from '../../screens/FilmsScreen/withDropdownStateSync';


function SearchResults(props) {
  console.log(props.genre, props.decade);
  return (
    <section>
      <h2>Films found are the following</h2>
      <div>This is the results list.</div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    genre: state.dropdowns.activeGenre,
    decade: state.dropdowns.activeDecade
  };
};

export default connect(mapStateToProps)(withDropdownStateSync(SearchResults));

SearchResults.propTypes = {
  genre: PropTypes.string.isRequired,
  decade: PropTypes.string.isRequired
};
