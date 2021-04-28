import React from 'react';
import { LoginForm } from '../components/LoginForm';
import { AuthLayout } from '../containers/AuthLayout';
import { Background } from '../containers/Background';

export const Login = () => {
  return (
    <Background>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </Background>
  );
};
