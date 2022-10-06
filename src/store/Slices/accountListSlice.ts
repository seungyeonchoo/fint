import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import GetAccountsService from '../../services/AccountService';
import { Accounts } from '../../types/types';
import TokenStorage, { TokenKey } from '../../utils/TokenStorage';

const { getAccountList } = new GetAccountsService();
const { removeToken } = new TokenStorage();

export const getAccountListRequest = createAsyncThunk(
  'GET_ACCOUNT_LIST',
  async (_, { rejectWithValue }) => {
    try {
      const list = await getAccountList();
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

const initialAccountList: Accounts[] = [];

const accountListSlice = createSlice({
  name: 'accounts',
  initialState: { isLoading: false, accountList: initialAccountList },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAccountListRequest.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAccountListRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accountList = action.payload;
    });
    builder.addCase(getAccountListRequest.rejected, (state, action) => {
      state.isLoading = false;
      console.error(action.payload);
    });
  },
});

export default accountListSlice.reducer;
