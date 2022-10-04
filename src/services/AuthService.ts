import TokenStorage, { TokenKey } from '../utils/TokenStorage';
import instance from './AxiosInstance';

const { setToken, removeToken } = new TokenStorage();

interface LoginInput {
  email: string;
  password: string;
}

interface Auth {
  login: (input: LoginInput) => void;
  logout: () => void;
}

class AuthService implements Auth {
  login: (input: LoginInput) => void = async input => {
    const { data } = await instance.post('/login', input);
    setToken(TokenKey, data);
  };

  logout: () => void = () => {
    removeToken(TokenKey);
  };
}

export default AuthService;
