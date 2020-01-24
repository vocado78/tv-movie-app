import React from 'react';

import Layout from '../../components/Layout/Layout';
import { ResetPasswordForm } from '../../components/Auth';


export default function ResetPasswordScreen() {
  return (
    <Layout className="items-center h-stick text-gray-500">
      <h1 className="text-2xl mb-8 font-light">Reset my password</h1>
      <p className="mb-6 text-lg">Enter your e-mail address below and we will send you a link to reset your password.</p>
      <ResetPasswordForm />
    </Layout>
  );
}
