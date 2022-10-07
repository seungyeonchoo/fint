import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { AppDispatch, ReducerType } from '../store';
import TokenStorage, { TokenKey } from '../utils/TokenStorage';

const useGetData = (func: any, func2?: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();
  const { getToken } = new TokenStorage();
  const { accounts, users, filters } = useSelector((state: ReducerType) => state);
  const { params } = filters;

  useEffect(() => {
    dispatch(func(params));
    if (func2) dispatch(func2());
    if (!getToken(TokenKey)) nav('/');
  }, [params]);

  return { accounts, users, filters };
};

export default useGetData;
