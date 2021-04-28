import React from 'react';
import { SigninForm } from '../components/SigninForm';
import { AuthLayout } from '../containers/AuthLayout';
import { Background } from '../containers/Background';

export const Signin = () => {
  return (
    <Background>
      <AuthLayout>
        <SigninForm />
      </AuthLayout>
    </Background>
  );
};
