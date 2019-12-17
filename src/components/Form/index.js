/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Form as FinalForm, Field } from 'react-final-form';

import FormInput from './FormInput';
import Button from '../Button';


export default function Form({
  formStyle,
  onSubmit,
  otherAttrs,
  inputStyle,
  buttonLabel,
  buttonStyle,
  validate,
  children
}) {
  return (
    <FinalForm
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, submitting }) => (
        <form className={formStyle} onSubmit={handleSubmit}>
          {otherAttrs.map((attrs) => (
            <Field name={attrs.name} type={attrs.type} key={attrs.name}>
              {({ input, meta }) => (
                <FormInput input={input} meta={meta} attrs={attrs} inputStyle={inputStyle} />
              )}
            </Field>
          ))}
          {children || (
            <Button type="submit" className={buttonStyle} disabled={submitting} label={buttonLabel} />
          )}
        </form>
      )}
    />
  );
}

Form.defaultProps = {
  children: null,
  buttonLabel: '',
  buttonStyle: ''
};

Form.propTypes = {
  formStyle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  otherAttrs: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputStyle: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  buttonStyle: PropTypes.string,
  validate: PropTypes.func.isRequired,
  children: PropTypes.node
};
