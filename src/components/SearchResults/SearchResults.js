import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withDropdownStateSync from '../../screens/FilmsScreen/withDropdownStateSync';
import { sortItems, SORT_BY_LABEL } from '../../content/dropdown';
import Dropdown from '../Dropdown/Dropdown';

const tempItem = ({ label }) => {
  return <li><p>{label}</p></li>;
};

tempItem.propTypes = {
  label: PropTypes.string.isRequired
};

function SearchResults(props) {
  console.log(props.genre, props.decade);
  const title = 'default';

  return (
    <section>
      <div className="flex items-center border-b border-gray-500 text-gray-500 text-sm mt-8">
        <h2 className="uppercase tracking-wider text-gray-400">Films found are the following</h2>
        <h3 className="ml-auto mr-4 capitalize">{SORT_BY_LABEL}</h3>
        <ul>
          <Dropdown title={title} items={sortItems} component={tempItem} />
        </ul>
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
