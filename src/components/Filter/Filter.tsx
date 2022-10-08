import SearchForm from './SearchForm';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
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
