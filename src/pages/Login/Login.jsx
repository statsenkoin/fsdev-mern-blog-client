import React from 'react';

import { LoginForm } from 'components';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div
      style={{
        maxWidth: 500,
        marginInline: 'auto',
        marginTop: 150,
        padding: 24,
        borderRadius: 8,
        // backgroundColor: 'rgba(87, 54, 163, 0.1)',
        backgroundColor: 'transparent',
        // boxShadow: 'var(--box-shadow)',
        boxShadow: `rgb(0 0 0 / 20%) 0px 3px 3px -2px,
      rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px`,
      }}>
      <h1 style={{ textAlign: 'center' }}>Login form</h1>
      <LoginForm />
      <p style={{ textAlign: 'center', marginTop: 16 }}>
        Do not have an account?{' '}
        <span>
          <Link to="/register">Register.</Link>
        </span>{' '}
      </p>
    </div>
  );
};

export default Login;
