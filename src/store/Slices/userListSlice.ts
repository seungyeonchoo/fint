import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import GetUserService from '../../services/UserService';
import { Users, UserSettings } from '../../types/types';
import TokenStorage, { TokenKey } from '../../utils/TokenStorage';

const { getUserList, getUserSetting } = new GetUserService();
const { removeToken } = new TokenStorage();

export const getUserListRequest = createAsyncThunk(
  'GET_USER_LIST',
  async (_, { rejectWithValue }) => {
    try {
      const list = await getUserList();
      return list;
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.data === 'jwt expired') removeToken(TokenKey);
        else return rejectWithValue(e.response?.data);
      }
      throw e;
    }
  }
);

export const getUserSettingRequest = createAsyncThunk(
  'GET_USER_SETTING',
  async (_, { rejectWithValue }) => {
    try {
      const list = await getUserSetting();
      return list;
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.data === 'jwt expired') removeToken(TokenKey);
        else return rejectWithValue(e.response?.data);
      }
      throw e;
    }
  }
);

const initialAccountList: Users[] = [];

const userListSlice = createSlice({
  name: 'accounts',
  initialState: { isLoading: false, userList: initialAccountList },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserListRequest.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getUserListRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userList = action.payload;
    });
    builder.addCase(getUserListRequest.rejected, (state, action) => {
      state.isLoading = false;
      console.error(action.payload);
    });
    builder.addCase(getUserSettingRequest.fulfilled, (state, action) => {
      const newList = state.userList.map((user, idx) => {
        const userSetting = action.payload.filter((setting: UserSettings) => {
          return setting.uuid === user.uuid;
        });
        return { ...user, settings: { ...userSetting[0] } };
      });
      state.userList = newList;
    });
  },
});

export default userListSlice.reducer;