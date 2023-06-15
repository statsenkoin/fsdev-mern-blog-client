import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import {
  FormWrapper,
  Label,
  AddContactButton,
  ErrorText,
} from './Formik.styled';

const SubmitSchema = Yup.object().shape({
  username: Yup.string(),
  email: Yup.string().required('Email required'),
  password: Yup.string().required('Password required'),
});

export const RegisterForm = () => {
  // hooks
  const handleSubmit = (newUser) => {};

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={SubmitSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit({
          ...values,
        });
        resetForm();
      }}>
      <FormWrapper>
        <Label htmlFor="username">
          User name:
          <Field type="text" name="username" />
        </Label>
        <ErrorText name="username" component="span"></ErrorText>
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
        <AddContactButton type="submit">Register</AddContactButton>
      </FormWrapper>
    </Formik>
  );
};
