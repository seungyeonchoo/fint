import usePaginations from '../../hooks/usePagination';
import { Props } from '../Filter/Filter';

const Pagination = ({ getList }: Props) => {
  const { pageList, handlePage } = usePaginations(getList);
  return (
    <>
      {pageList.map(page => (
        <button name="_page" value={page} key={page} onClick={handlePage}>
          {page}
        </button>
      ))}
    </>
  );
};

export default Pagination;
