import React from 'react';
import PropTypes from 'prop-types';

import { TextField, Submit } from '../Styled';
import './LoginForm.css';

const LoginForm = ({ onSubmit }) => (
  <form className="LoginForm" onSubmit={onSubmit}>
    <TextField type="email" placeholder="Email" name="email" />
    <TextField type="password" placeholder="Password" name="password" />
    <Submit type="submit" />
  </form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
