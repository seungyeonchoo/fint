import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../store';
import { updateParam } from '../store/Slices/filterSilce';

const useFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { params } = useSelector((state: ReducerType) => state.filters);

  const handleFilter: React.ChangeEventHandler<HTMLSelectElement> = e => {
    const { name, value } = e.target;
    dispatch(updateParam({ ...params, [name]: value }));
    console.log(params);
  };

  return { handleFilter };
};

export default useFilter;
