import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type ReducerType = ReturnType<typeof rootReducer>;
