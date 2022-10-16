import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/Pagination/Pagination';
import GetUserService from '../../services/UserService';
import UserList from './components/UserList';
import UserListFilter from './components/UserListFilter';

const UserPage = () => {
  const { getUserSetting } = new GetUserService();
  return (
    <>
      <Filter>
        <UserListFilter />
      </Filter>
      <UserList />
      <Pagination getList={getUserSetting} />
    </>
  );
};

export default UserPage;
