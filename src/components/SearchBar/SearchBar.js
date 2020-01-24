import React from 'react';
import PropTypes from 'prop-types';

import Form from '../Form/Form';
import { searchAttrs } from '../../content/forms';


export default function SearchBar({ onSubmit }) {
  return (
    <Form
      formStyle="flex text-sm uppercase"
      onSubmit={onSubmit}
      otherAttrs={searchAttrs}
      inputStyle="text-input-dark mt-0 ml-6 mr-3"
      validate={() => {}}
      buttonLabel="Search"
      buttonStyle="btn btn-primary py-1 px-3 text-sm font-medium"
    />
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
