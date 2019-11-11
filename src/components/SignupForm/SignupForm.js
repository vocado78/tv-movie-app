import React from 'react';

import Form from '../Form/Form';
import formInputAttrs from '../../content/signupForm';


export default function SignupForm() {
  return (
    <Form
      formStyle="w-1/3 p-8 mx-auto my-0"
      onSubmit={() => {}}
      otherAttrs={formInputAttrs}
      inputStyle="text-input"
      buttonLabel="Sign Up"
      buttonStyle="btn btn-primary"
    />
  );
}
