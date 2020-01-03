import React, { Component } from 'react';

import Dropdown from './Dropdown/Dropdown';
import { dropdownItems, BROWSE_BAR_LABEL } from '../../content/dropdown';


export default class BrowseBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItems: {
        genre: '',
        decade: ''
      }
    };
  }
  // not only update state on item click, also based on url params when user uses browser history navigation to go back/forward => listen to url changes?

  handleClick = (type, item) => {
    this.setState((prevState) => ({
      activeItems: {
        ...prevState.activeItems,
        [type]: item
      }
    }));
  }

  setTitle = (label) => {
    const { activeItems: { genre, decade } } = this.state;
    let title;

    if (label === 'Genre') {
      title = genre || label;
    } else {
      title = decade || label;
    }

    return title;
  };

  render() {
    const { activeItems } = this.state;

    return (
      <div className="flex items-center text-gray-400 text-sm uppercase">
        <h3 className="mr-6 tracking-wider">{BROWSE_BAR_LABEL}</h3>
        <ul className="flex border border-solid border-gray-600 rounded px-1 py-px">
          {dropdownItems.map(({ type, label, items }) => {
            return (
              <Dropdown key={type} title={this.setTitle(label)} items={items} onClick={this.handleClick} activeItems={activeItems} />
            );
          })}
        </ul>
      </div>
    );
  }
}
