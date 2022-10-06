import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { AppDispatch, ReducerType } from '../store';
import TokenStorage, { TokenKey } from '../utils/TokenStorage';

const useGetData = (func: any, func2?: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();
  const { getToken } = new TokenStorage();
  const { accounts, users } = useSelector((state: ReducerType) => state);

  useEffect(() => {
    dispatch(func());
    if (func2) dispatch(func2());
    if (!getToken(TokenKey)) nav('/');
  }, []);

  return { accounts, users };
};

export default useGetData;
