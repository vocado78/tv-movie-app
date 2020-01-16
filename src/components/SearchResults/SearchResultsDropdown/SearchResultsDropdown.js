import React from 'react';
import PropTypes from 'prop-types';

import { sortItems, SORT_BY_LABEL } from '../../../content/dropdown';
import Dropdown from '../../Dropdown/Dropdown';

// extract into own module and fix
const tempItem = ({ label }) => {
  return <li className="capitalize py-px whitespace-no-wrap hover:text-white">{label}</li>;
};

tempItem.propTypes = {
  label: PropTypes.string.isRequired
};

// can use local state for active sort option, only needs to sort the fetched results,
// not display any redux state labels (only for modifying path)
export default function SearchResultsDropdown() {
  return (
    <div className="flex items-center ml-auto">
      <h3 className="mr-4 capitalize">{SORT_BY_LABEL}</h3>
      <ul>
        <Dropdown label={SORT_BY_LABEL} items={sortItems} component={tempItem} />
      </ul>
    </div>
  );
}
