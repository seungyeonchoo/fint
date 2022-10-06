export interface Storage {
  getToken: (key: string) => string | null;
  setToken: (key: string, token: string) => void;
  removeToken: (key: string) => void;
}

const STORAGE = localStorage;
export const TokenKey = 'ACCESS_TOKEN';

class TokenStorage implements Storage {
  setToken: (key: string, token: string) => void = (key, token) => {
    STORAGE.setItem(key, token);
  };

  getToken: (key: string) => string = key => {
    const token = STORAGE.getItem(key);
    return token as string;
  };

  removeToken: (key: string) => void = key => {
    STORAGE.removeItem(key);
  };
}

export default TokenStorage;
