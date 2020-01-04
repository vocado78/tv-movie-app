import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setActiveGenre, setActiveDecade } from '../../../../actions';

// before returning navitem, check what happens when classname is moved to li from link

const sanitise = (str) => {
  return str.toLowerCase().replace(' ', '-');
};

class DropdownItem extends Component {
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
    const { genre, decade } = this.props;
    if (genre !== prevProps.genre || decade !== prevProps.decade) {
      this.generatePath();
    }
  }

  handleClick = () => {
    const { type, label } = this.props;
    if (type === 'genre') this.props.setActiveGenre(label);
    else this.props.setActiveDecade(label);
  }

  generatePath = () => {
    const { genre, decade, type, label } = this.props;
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
      <li className="text-sm capitalize py-px whitespace-no-wrap hover:text-white">
        <Link to={path} onClick={this.handleClick}>{label}</Link>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genre: state.dropdowns.activeGenre,
    decade: state.dropdowns.activeDecade
  };
};

export default connect(
  mapStateToProps,
  { setActiveDecade, setActiveGenre }
)(DropdownItem);

DropdownItem.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  decade: PropTypes.string.isRequired,
  setActiveDecade: PropTypes.func.isRequired,
  setActiveGenre: PropTypes.func.isRequired
};
