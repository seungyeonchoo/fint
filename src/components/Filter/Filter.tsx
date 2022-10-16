import SearchForm from './SearchForm';
import { ReactNode } from 'react';

export interface Props {
  children?: ReactNode;
  getList?: any;
}

const Filter = ({ children }: Props) => {
  return (
    <div>
      <SearchForm />
      {children}
    </div>
  );
};

export default Filter;
