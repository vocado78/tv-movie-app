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
  const divClass = attrs.name === 'title' ? 'flex items-center' : 'flex flex-col mb-4 text-sm';

  return (
    <div className={divClass}>
      <label htmlFor={attrs.name} className={isError ? 'text-red-600' : ''}>{attrs.label}</label>
      <input
        id={attrs.name}
        placeholder={attrs.placeholder || ''}
        className={isError ? `${inputStyle} border-red-600` : inputStyle}
        {...input}
      />
      {isError && <span className="text-red-600 w-64 break-words mt-1 leading-tight">{meta.error}</span>}
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
