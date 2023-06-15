import React from 'react';

import { RegisterForm } from 'components';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div
      style={{
        maxWidth: 500,
        marginInline: 'auto',
        marginTop: 50,
        padding: 24,
        borderRadius: 8,
        // backgroundColor: 'rgba(87, 54, 163, 0.1)',
        backgroundColor: 'transparent',
        boxShadow: `rgb(0 0 0 / 20%) 0px 3px 3px -2px,
      rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px`,
      }}>
      <h1 style={{ textAlign: 'center' }}>Register form</h1>
      <RegisterForm />
      <p style={{ textAlign: 'center', marginTop: 16 }}>
        Allready have account?{' '}
        <span>
          <Link to="/login">Login.</Link>
        </span>{' '}
      </p>
    </div>
  );
};

export default Register;
