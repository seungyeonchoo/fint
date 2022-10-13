import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import AuthService from '../services/AuthService';
import TokenStorage, { TokenKey } from '../utils/TokenStorage';
import useInput from './useInput';

const useAuth = () => {
  const { login, logout } = new AuthService();
  const { input, initialInput, setInput } = useInput();
  const { getToken } = new TokenStorage();
  const token = getToken(TokenKey);
  const nav = useNavigate();

  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    login(input);
    setInput(initialInput);
    nav('/accounts');
  };

  useEffect(() => {
    token && nav('/accounts');
  }, [token]);

  return { handleLogin };
};

export default useAuth;
