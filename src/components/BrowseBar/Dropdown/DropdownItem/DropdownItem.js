import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// before returning navitem, check what happens when classname is moved to li from link

const sanitise = (str) => {
  return str.toLowerCase().replace(' ', '-');
};

export default class DropdownItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: ''
    };
  }

  componentDidMount() {
    this.generatePath();
  }

  componentDidUpdate(prevProps) {
    const { activeItems: { genre, decade } } = this.props;
    if (genre !== prevProps.activeItems.genre || decade !== prevProps.activeItems.decade) {
      this.generatePath();
    }
  }

  handleClick = () => {
    const { type, label } = this.props;
    this.props.onClick(type, label);
  }

  generatePath = () => {
    const { activeItems: { genre, decade }, type, label } = this.props;
    const sanitisedLabel = sanitise(label);
    const sanitisedGenre = sanitise(genre);

    if (!genre && !decade) {
      this.setState({ path: `/films/${type}/${sanitisedLabel}` });
    }
    if (genre && !decade) {
      if (type === 'genre') {
        this.setState({ path: `/films/${type}/${sanitisedLabel}` });
      } else {
        this.setState({ path: `/films/genre/${sanitisedGenre}/${type}/${sanitisedLabel}` });
      }
    }
    if (!genre && decade) {
      if (type === 'genre') {
        this.setState({ path: `/films/${type}/${sanitisedLabel}/decade/${decade}` });
      } else {
        this.setState({ path: `/films/${type}/${sanitisedLabel}` });
      }
    }
    if (genre && decade) {
      if (type === 'genre') {
        this.setState({ path: `/films/${type}/${sanitisedLabel}/decade/${decade}` });
      } else {
        this.setState({ path: `/films/genre/${sanitisedGenre}/${type}/${sanitisedLabel}` });
      }
    }
  }

  render() {
    const { label } = this.props;
    const { path } = this.state;

    return (
      <li className="text-sm py-px whitespace-no-wrap hover:text-white">
        <Link to={path} onClick={this.handleClick}>{label}</Link>
      </li>
    );
  }
}

DropdownItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  activeItems: PropTypes.objectOf(PropTypes.string).isRequired
};
