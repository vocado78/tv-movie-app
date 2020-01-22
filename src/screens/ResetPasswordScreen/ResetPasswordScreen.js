import React from 'react';

import Container from '../../components/Container/Container';
import { ResetPasswordForm } from '../../components/Auth';


export default function ResetPasswordScreen() {
  const backgroundStyle = {
    backgroundColor: '#1f252e',
    backgroundImage: 'linear-gradient(180deg, #1f252e, #14181c 40%)'
  };

  return (
    <div style={backgroundStyle}>
      <Container className="flex-col items-center h-stick text-gray-500 py-8 font-rubik">
        <h1 className="text-2xl mb-8 font-light">Reset my password</h1>
        <p className="mb-6 text-lg">Enter your e-mail address below and we will send you a link to reset your password.</p>
        <ResetPasswordForm />
      </Container>
    </div>
  );
}
