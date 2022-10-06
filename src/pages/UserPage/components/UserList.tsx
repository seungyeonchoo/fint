import useGetData from '../../../hooks/useGetData';
import { getUserListRequest, getUserSettingRequest } from '../../../store/Slices/userListSlice';
import Title from './Title';

const UserList = () => {
  const { users } = useGetData(getUserListRequest, getUserSettingRequest);
  const { userList } = users;

  return (
    <ul>
      <Title />
      {userList.map(user => {
        return (
          <li key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.accounts.length}</div>
            <div>{user.gender_origin}</div>
            <div>{user.birth_date}</div>
            <div>{user.phone_number}</div>
            <div>{user.last_login}</div>
            <div>{user.created_at}</div>
            {user.settings?.allow_marketing_push ? <div>동의</div> : <div>비동의</div>}
            {user.settings?.is_active ? <div>활성화</div> : <div>비활성화</div>}
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
