import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import AuthService from '../services/AuthService';
import TokenStorage, { TokenKey } from '../utils/TokenStorage';

const useAuth = () => {
  const { login, logout } = new AuthService();
  const { getToken } = new TokenStorage();
  const token = getToken(TokenKey);
  const nav = useNavigate();

  const initialInput = { email: '', password: '' };
  const [input, setInput] = useState(initialInput);
  const { email, password } = input;

  const handleAuthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    login(input);
    setInput(initialInput);
    nav('/accounts');
  };

  useEffect(() => {
    token && nav('/accounts');
  }, [token]);

  return { handleLogin, handleAuthInputChange, email, password };
};

export default useAuth;
