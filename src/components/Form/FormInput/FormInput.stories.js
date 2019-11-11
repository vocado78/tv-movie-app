import React from 'react';
import FormInput from './FormInput';

export default {
  title: 'Form/FormInput',
  component: FormInput
};

// in reality, name and type attrs are passed down individually from Field
const attrs = {
  name: 'test',
  label: 'Test',
  type: 'text',
  placeholder: 'Test the input by typing something here'
};

const meta = {
  error: '',
  touched: false
};

const input = {
  name: attrs.name,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {}
};

export const text = () => <FormInput inputStyle="text-input" attrs={attrs} input={input} meta={meta} />;
export const password = () => <FormInput inputStyle="text-input" attrs={{ ...attrs, type: 'password' }} input={input} meta={meta} />;
export const err = () => <FormInput inputStyle="text-input" attrs={attrs} input={input} meta={{ error: 'This field is required.', touched: true }} />;
