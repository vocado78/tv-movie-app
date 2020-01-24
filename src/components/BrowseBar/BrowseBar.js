import React from 'react';
import { connect } from 'react-redux';

import Dropdown from '../Dropdown/Dropdown';
import { browseBarDropdownLabels, BROWSE_BAR_LABEL } from '../../content/dropdown';
import BrowseBarDropdownItem from './BrowseBarDropdownItem/BrowseBarDropdownItem';


const BrowseBar = (props) => {
  return (
    <div className="flex items-center text-sm">
      <h3 className="mr-6 tracking-wider uppercase">{BROWSE_BAR_LABEL}</h3>
      <ul className="flex border border-solid border-gray-600 rounded px-1 py-px">
        {browseBarDropdownLabels.map(({ type, label, items }) => {
          const currentLabel = props[type] || label;
          return (
            <Dropdown key={type} label={currentLabel} items={items} component={BrowseBarDropdownItem} />
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    genre: state.dropdowns.activeGenre,
    decade: state.dropdowns.activeDecade
  };
};

export default connect(mapStateToProps)(BrowseBar);
