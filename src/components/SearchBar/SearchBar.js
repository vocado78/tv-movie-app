import React from 'react';
import PropTypes from 'prop-types';

import Form from '../Form/Form';
import { searchAttrs } from '../../content/forms';


export default function SearchBar({ onSubmit }) {
  return (
    <Form
      formStyle="flex text-gray-400 text-sm uppercase"
      onSubmit={onSubmit}
      otherAttrs={searchAttrs}
      inputStyle="text-input mt-0 bg-gray-800 ml-6 mr-3"
      validate={() => {}}
      buttonLabel="Search"
      buttonStyle="btn btn-primary"
    />
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
