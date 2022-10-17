import usePaginations from '../../hooks/usePagination';
import { Props } from '../Filter/Filter';

const Pagination = ({ getList }: Props) => {
  const { pages, pageNum, handlePage } = usePaginations(getList);

  return (
    <>
      <button name="_page" value={pageNum - 1} onClick={handlePage}>
        이전
      </button>
      {pages.map(page => (
        <button name="_page" value={page} key={page} onClick={handlePage}>
          {page}
        </button>
      ))}
      <button name="_page" value={pageNum + 1} onClick={handlePage}>
        다음
      </button>
    </>
  );
};

export default Pagination;
