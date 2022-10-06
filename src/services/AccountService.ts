import { Accounts } from '../types/types';
import instance from './AxiosInstance';

interface GetAccounts {
  getAccountList: (params?: object) => Promise<Array<Accounts>>;
  getAccountDetail: (id: string) => Promise<Accounts>;
}

class GetAccountsService implements GetAccounts {
  getAccountList: (params?: object) => Promise<Array<Accounts>> = async (params?) => {
    const { data } = await instance.get('/accounts', { params: { ...params, _expand: 'user' } });
    return data;
  };

  getAccountDetail: (id: string) => Promise<Accounts> = async id => {
    const { data } = await instance.get(`/accounts/${id}`, { params: { _expand: 'users' } });
    return data;
  };
}

export default GetAccountsService;
