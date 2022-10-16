import { Users, UserSettings } from '../types/types';
import instance from './AxiosInstance';

// export interface UserSetting {}

interface GetUsers {
  getUserList: (params?: object) => Promise<Array<Users>>;
  getUserDetail: (id: string) => Promise<Users>;
  getUserSetting: (params?: object) => Promise<Array<UserSettings>>;
}

class GetUserService implements GetUsers {
  getUserList: (params?: object | undefined) => Promise<Array<Users>> = async (params?) => {
    const { data } = await instance.get('/users', {
      params: { _embed: 'accounts' },
    });
    return data;
  };
  getUserDetail: (id: string) => Promise<Users> = async id => {
    const { data } = await instance.get(`/users/${id}`, { params: { _embed: 'accounts' } });
    return data;
  };
  getUserSetting: (params?: object) => Promise<Array<UserSettings>> = async params => {
    const { data } = await instance.get(`/usersetting`, {
      params: { ...params },
    });
    return data;
  };
}

export default GetUserService;
