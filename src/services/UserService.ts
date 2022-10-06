import { Users } from '../types/types';
import instance from './AxiosInstance';

// export interface UserSetting {}

interface GetUsers {
  getUserList: (params?: object) => Promise<Array<Users>>;
  getUserDetail: (id: string) => Promise<Users>;
  getUserSetting: () => Promise<any>;
}

class GetUserService implements GetUsers {
  getUserList: (params?: object | undefined) => Promise<Array<Users>> = async (params?) => {
    const { data } = await instance.get('/users', { params: { ...params, _embed: 'accounts' } });
    return data;
  };
  getUserDetail: (id: string) => Promise<Users> = async id => {
    const { data } = await instance.get(`/users/${id}`, { params: { _embed: 'accounts' } });
    return data;
  };
  getUserSetting: () => Promise<any> = async () => {
    const { data } = await instance.get(`/usersetting`);
    return data;
  };
}

export default GetUserService;
