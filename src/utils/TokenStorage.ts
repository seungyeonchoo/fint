export interface Storage {
  getToken: (key: string) => string | null;
  setToken: (key: string, token: string) => void;
  removeToken: (key: string) => void;
}

const STORAGE = localStorage;

class TokenStorage implements Storage {
  setToken: (key: string, token: string) => void = (key, token) => {
    STORAGE.setItem(key, token);
  };

  getToken: (key: string) => string = key => {
    const authToken = STORAGE.getItem(key);
    return authToken as string;
  };

  removeToken: (key: string) => void = key => {
    STORAGE.removeItem(key);
  };
}

export default TokenStorage;
