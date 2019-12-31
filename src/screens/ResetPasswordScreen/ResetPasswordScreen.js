import React from 'react';

import Container from '../../components/Container/Container';
import { ResetPasswordForm } from '../../components/Auth';


export default function ResetPasswordScreen() {
  return (
    <Container className="flex-col items-center">
      <h1 className="text-2xl">Reset My Password</h1>
      <p>Enter your e-mail address below and we will send you a link to reset your password.</p>
      <ResetPasswordForm />
    </Container>
  );
}
