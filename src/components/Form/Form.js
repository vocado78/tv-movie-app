/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Form as FinalForm, Field } from 'react-final-form';

import FormInput from './FormInput/FormInput';
import Button from '../Button/Button';


export default function Form({
  formStyle,
  onSubmit,
  otherAttrs,
  inputStyle,
  buttonLabel,
  buttonStyle
}) {
  // TODO: validate fn in Form containers to pass to Field comp

  return (
    <FinalForm
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form className={formStyle} onSubmit={handleSubmit}>
          {otherAttrs.map((attrs) => (
            <Field name={attrs.name} type={attrs.type} key={attrs.name}>
              {({ input, meta }) => (
                <FormInput input={input} meta={meta} attrs={attrs} inputStyle={inputStyle} />
              )}
            </Field>
          ))}
          <Button className={buttonStyle} disabled={submitting} label={buttonLabel} />
        </form>
      )}
    />
  );
}

Form.propTypes = {
  formStyle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  otherAttrs: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputStyle: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired
};
