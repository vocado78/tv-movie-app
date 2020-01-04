import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown/Dropdown';
import { dropdownItems, BROWSE_BAR_LABEL } from '../../content/dropdown';


class BrowseBar extends Component {
  setTitle = (label) => {
    const { genre, decade } = this.props;
    let title;

    if (label === 'genre') {
      title = genre || label;
    } else {
      title = decade || label;
    }

    return title;
  };

  render() {
    return (
      <div className="flex items-center text-gray-400 text-sm">
        <h3 className="mr-6 tracking-wider uppercase">{BROWSE_BAR_LABEL}</h3>
        <ul className="flex border border-solid border-gray-600 rounded px-1 py-px">
          {dropdownItems.map(({ type, label, items }) => {
            return (
              <Dropdown key={type} title={this.setTitle(label)} items={items} />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genre: state.dropdowns.activeGenre,
    decade: state.dropdowns.activeDecade
  };
};

export default connect(mapStateToProps)(BrowseBar);

BrowseBar.propTypes = {
  genre: PropTypes.string.isRequired,
  decade: PropTypes.string.isRequired
};
