/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';


export default function FormInput({
  attrs,
  input,
  meta,
  inputStyle
}) {
  const isError = meta.error && meta.touched;

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={attrs.name} className={isError ? 'text-red-600' : ''}>{attrs.label}</label>
      <input
        id={attrs.name}
        placeholder={attrs.placeholder}
        className={isError ? `${inputStyle} border-red-600` : inputStyle}
        {...input}
      />
      {isError && <span className="text-red-600">{meta.error}</span>}
    </div>
  );
}
// TODO: fix input and meta types
FormInput.propTypes = {
  attrs: PropTypes.objectOf(
    PropTypes.string.isRequired
  ).isRequired,
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired,
  inputStyle: PropTypes.string.isRequired
};
