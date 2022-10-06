import instance from './AxiosInstance';

// export interface User {}

// export interface UserSetting {}

interface GetUsers {
  getUserList: (params?: object) => Promise<any>;
  getUserDetail: (id: string) => Promise<any>;
  getUserSetting: () => Promise<any>;
}

class GetUserService implements GetUsers {
  getUserList: (params?: object | undefined) => Promise<any> = async (params?) => {
    const { data } = await instance.get('/users', { params: { ...params, _expand: 'user' } });
    return data;
  };
  getUserDetail: (id: string) => Promise<any> = async id => {
    const { data } = await instance.get(`/users/${id}`, { params: { _expand: 'user' } });
    return data;
  };
  getUserSetting: () => Promise<any> = async () => {
    const { data } = await instance.get(`/usersetting`);
    return data;
  };
}

export default GetUserService;
