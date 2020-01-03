import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


function SearchResults(props) {
  const params = useParams();
  console.log(params, props.genre, props.decade);

  // compare genre and decade from params with genre and decade in store
  // if not the same, update store with genre and/or decade from params

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

export default connect(mapStateToProps)(SearchResults);

SearchResults.propTypes = {
  genre: PropTypes.string.isRequired,
  decade: PropTypes.string.isRequired
};
