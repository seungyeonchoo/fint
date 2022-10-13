import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../store';
import { updateParam } from '../store/Slices/filterSilce';

const useFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { params } = useSelector((state: ReducerType) => state.filters);

  const handleFilter: React.ChangeEventHandler<HTMLSelectElement> = e => {
    const { name, value } = e.target;
    value === 'null'
      ? dispatch(updateParam({ ...params, [name]: null }))
      : dispatch(updateParam({ ...params, [name]: value }));
  };

  const handleSearch: React.MouseEventHandler<HTMLButtonElement> = e => {
    const { name, value } = e.target as HTMLButtonElement;
    dispatch(updateParam({ ...params, [name]: value }));
  };

  return { handleFilter, handleSearch };
};

export default useFilter;
