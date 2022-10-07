import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import accountListSlice from './Slices/accountListSlice';
import userListSlice from './Slices/userListSlice';
import filterSilce from './Slices/filterSilce';

const rootReducer = combineReducers({
  accounts: accountListSlice,
  users: userListSlice,
  filters: filterSilce,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type ReducerType = ReturnType<typeof rootReducer>;
