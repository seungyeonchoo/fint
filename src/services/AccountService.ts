import instance from './AxiosInstance';

export interface Accounts {
  id: number;
  userId: number;
  uuid: string;
  broker_id: string;
  status: number;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface GetAccounts {
  getAccountList: (params?: object) => Promise<Array<Accounts>>;
  getAccountDetail: (id: string) => Promise<Accounts>;
}

class GetAccountsService implements GetAccounts {
  getAccountList: (params?: object) => Promise<Array<Accounts>> = async (params?) => {
    const { data } = await instance.get('/accounts', params);
    return data;
  };

  getAccountDetail: (id: string) => Promise<Accounts> = async id => {
    const { data } = await instance.get(`/accounts/${id}`);
    return data;
  };
}

export default GetAccountsService;
