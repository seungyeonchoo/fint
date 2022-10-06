import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import AuthService from '../services/AuthService';
import TokenStorage, { TokenKey } from '../utils/TokenStorage';

const useAuth = () => {
  const { login, logout } = new AuthService();
  const initialInput = { email: '', password: '' };
  const [input, setInput] = useState(initialInput);
  const { email, password } = input;
  const nav = useNavigate();
  const { getToken } = new TokenStorage();

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
    getToken(TokenKey) && nav('/accounts');
  };

  return { email, password, handleInputChange, handleLogin };
};

export default useAuth;
