import useGetData from '../../../hooks/useGetData';
import styled from 'styled-components';
import { getUserListRequest, getUserSettingRequest } from '../../../store/Slices/userListSlice';
import Title from './Title';

const UserList = () => {
  const { users } = useGetData(getUserListRequest, getUserSettingRequest);
  const { userList } = users;

  return (
    <ListBox>
      <Title />
      {userList.map(user => {
        return (
          <List key={user.id}>
            <Row rows={10}>{user.name}</Row>
            <Row rows={10}>{user.email}</Row>
            <Row rows={10}>{user.accounts.length}</Row>
            <Row rows={10}>{user.gender_origin}</Row>
            <Row rows={10}>{user.birth_date}</Row>
            <Row rows={10}>{user.phone_number}</Row>
            <Row rows={10}>{user.last_login}</Row>
            <Row rows={10}>{user.created_at}</Row>
            {user.settings?.allow_marketing_push ? (
              <Row rows={10}>동의</Row>
            ) : (
              <Row rows={10}>비동의</Row>
            )}
            {user.settings?.is_active ? <Row rows={10}>활성화</Row> : <Row rows={10}>비활성화</Row>}
          </List>
        );
      })}
    </ListBox>
  );
};

export default UserList;

export interface StyleProps {
  rows: number;
}

export const List = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Row = styled.div`
  width: ${(props: StyleProps) => `calc(100% / ${props.rows})`};
  text-align: center;
`;

export const ListBox = styled.ul`
  padding: 0;
`;
