import React from 'react';

// import Container from '../../components/Layout/Container/Container';
import { ResetPasswordForm } from '../../components/Auth';


export default function ResetPasswordScreen() {
  return (
    <div className="flex flex-col items-center h-stick text-gray-500 font-rubik">
      <h1 className="text-2xl mb-8 font-light">Reset my password</h1>
      <p className="mb-6 text-lg">Enter your e-mail address below and we will send you a link to reset your password.</p>
      <ResetPasswordForm />
    </div>
  );
}
