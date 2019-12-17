/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Form from '.';

export default {
  title: 'Form',
  component: Form
};

const testProps = {
  formStyle: 'w-1/3 p-8 mx-auto my-0',
  onSubmit: () => {},
  otherAttrs: [
    { name: 'firstname', type: 'text', placeholder: 'First name', label: 'First name' },
    { name: 'lastname', type: 'text', placeholder: 'Last name', label: 'Last name' },
    { name: 'email', type: 'email', placeholder: 'E-mail Address', label: 'E-mail Address' },
    { name: 'password', type: 'password', placeholder: 'Password', label: 'Password' }
  ],
  inputStyle: 'text-input',
  buttonLabel: 'Try Me',
  buttonStyle: 'btn btn-primary',
  validate: () => {}
};

export const normal = () => <Form {...testProps} />;
normal.story = {
  name: 'default'
};
