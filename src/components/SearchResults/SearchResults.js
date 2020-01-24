import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withDropdownStateSync from '../../screens/FilmsScreen/withDropdownStateSync';
import SearchResultsDropdown from './SearchResultsDropdown/SearchResultsDropdown';

function SearchResults(props) {
  console.log(props.genre, props.decade);

  return (
    <section>
      <div className="flex items-center border-b border-gray-500 text-sm mt-8">
        <h2 className="uppercase tracking-wider">Films found are the following</h2>
        <SearchResultsDropdown />
      </div>
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
