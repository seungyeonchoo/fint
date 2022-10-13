import React from 'react';
import useFilter from '../../hooks/useFilter';
import useInput from '../../hooks/useInput';

const SearchForm = () => {
  const { handleInputChange } = useInput();
  const { handleSearch } = useFilter();

  return (
    <form>
      <input
        name="q"
        type="text"
        placeholder="검색어를 입력해 주세요"
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>검색</button>
    </form>
  );
};

export default SearchForm;
