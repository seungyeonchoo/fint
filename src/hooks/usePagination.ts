import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../store';
import { updateParam } from '../store/Slices/filterSilce';

const usePaginations = (getList: any) => {
  const { params } = useSelector((state: ReducerType) => state.filters);
  const [pageList, setPageList] = useState<Array<string>>([]);
  const pages = pageList.slice(Number(params._page) - 1, Number(params._page) + 4);
  const pageNum = Number(params._page);

  const dispatch = useDispatch<AppDispatch>();

  const handlePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;
    dispatch(updateParam({ ...params, [name]: value }));
  };

  const getListRequest = async () => {
    const response = await getList({ ...params, _page: null, _limit: null });
    const pageLength = Math.ceil(response.length / Number(params._limit));
    const pageArr = Array.from({ length: pageLength }, (_, i) => i + 1).map(page =>
      page.toString()
    );
    setPageList(pageArr);
  };

  useEffect(() => {
    getListRequest();
  }, [params]);

  return { pageList, pages, pageNum, handlePage };
};

export default usePaginations;
