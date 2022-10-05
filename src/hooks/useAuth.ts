import { async } from 'q';
import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const useAuth = () => {
  const { login, logout } = new AuthService();
  const initialInput = { email: '', password: '' };
  const [input, setInput] = useState(initialInput);
  const { email, password } = input;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInput(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login(input);
    setInput(initialInput);
  };

  return { email, password, handleInputChange, handleLogin };
};

export default useAuth;
