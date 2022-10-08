import Filter from '../../components/Filter/Filter';
import UserList from './components/UserList';
import UserListFilter from './components/UserListFilter';

const UserPage = () => {
  return (
    <>
      <Filter>
        <UserListFilter />
      </Filter>
      <UserList />
    </>
  );
};

export default UserPage;
