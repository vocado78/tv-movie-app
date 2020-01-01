import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown/Dropdown';
import { dropdownItems, BROWSE_BAR_LABEL } from '../../content/dropdown';

// clicking an item in the dropdown should:
// 1. change the dropdown title to active item
// 2. trigger a param update in the url

// for its path, each dropdown link needs to know:
// if a genre is selected and which one
// if a decade is selected and which one
// the current sort option (use default?)


export default class BrowseBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: '',
      decade: ''
    };
  }

  handleClick = (event, id) => {
    this.setState({
      [id]: event.target.id
    });
    this.props.handleSelect();
  }

  setTitle = (label) => {
    const { genre, decade } = this.state;
    let title;

    if (label === 'Genre') {
      title = genre || label;
    } else {
      title = decade || label;
    }

    return title;
  };

  render() {
    return (
      <div className="flex items-center text-gray-400 text-sm uppercase">
        <h3 className="mr-6 tracking-wider">{BROWSE_BAR_LABEL}</h3>
        <ul className="flex border border-solid border-gray-600 rounded px-1 py-px">
          {dropdownItems.map(({ id, label, items }) => {
            return (
              <Dropdown key={id} title={this.setTitle(label)} items={items} onClick={(e) => this.handleClick(e, id)} />
            );
          })}
        </ul>
      </div>
    );
  }
}

BrowseBar.propTypes = {
  // path: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired
};
