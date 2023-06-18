import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { login } from 'redux/auth/operations';
import {
  FormWrapper,
  Label,
  AddContactButton,
  ErrorText,
} from './Formik.styled';

const SubmitSchema = Yup.object().shape({
  email: Yup.string().email().required('Email required'),
  password: Yup.string().required('Password required').min(6),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (newUser) => {
    dispatch(login(newUser));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SubmitSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit({ ...values });
        resetForm();
      }}>
      <FormWrapper>
        <Label htmlFor="email">
          <p>
            Email:{' '}
            <span style={{ margin: 0, color: 'red', fontWeight: 700 }}>*</span>
          </p>
          <Field type="email" name="email" />
        </Label>
        <ErrorText name="email" component="span"></ErrorText>
        <Label htmlFor="password">
          <p>
            Password:{' '}
            <span style={{ margin: 0, color: 'red', fontWeight: 700 }}>*</span>
          </p>
          <Field type="text" name="password" />
        </Label>
        <ErrorText name="password" component="span"></ErrorText>
        <AddContactButton type="submit">Login</AddContactButton>
      </FormWrapper>
    </Formik>
  );
};
