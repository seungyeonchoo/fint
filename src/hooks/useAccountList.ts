import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../store';
import { getAccountListRequest } from '../store/Slices/accountListSlice';

const useAccountList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { accountList } = useSelector((state: ReducerType) => state.accounts);

  useEffect(() => {
    dispatch(getAccountListRequest());
  }, []);

  return { accountList };
};

export default useAccountList;
