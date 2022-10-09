import useFilter from '../../../hooks/useFilter';

const UserListFilter = () => {
  const { handleFilter } = useFilter();
  return (
    <>
      <select onChange={handleFilter} name="is_active">
        <option value="null">활성화 여부</option>
        <option value="true">활성화</option>
        <option value="false">비활성화</option>
      </select>
      <select onChange={handleFilter} name="is_staff">
        <option value="null">임직원 여부</option>
        <option value="true">임직원</option>
        <option value="false">일반회원</option>
      </select>
    </>
  );
};

export default UserListFilter;
