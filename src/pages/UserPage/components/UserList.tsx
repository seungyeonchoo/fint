import useGetData from '../../../hooks/useGetData';
import styled from 'styled-components';
import { getUserListRequest, getUserSettingRequest } from '../../../store/Slices/userListSlice';
import Title from './Title';
import handleDateForm from '../../../utils/handleDate';
import { Users, UserSettings } from '../../../types/types';

const UserList = () => {
  const { users } = useGetData(getUserListRequest, getUserSettingRequest);
  const { userList, userSettings } = users;

  return (
    <ListBox>
      <Title />
      {userSettings.map((setting: UserSettings) => {
        const userWithSetting = userList.filter((user: Users) => user.uuid === setting.uuid);
        return (
          userWithSetting[0] && (
            <List key={setting.uuid}>
              <Row rows={10}>{userWithSetting[0]?.name}</Row>
              <Row rows={10}>{userWithSetting[0]?.email}</Row>
              <Row rows={10}>{userWithSetting[0]?.accounts.length}</Row>
              <Row rows={10}>{userWithSetting[0]?.gender_origin}</Row>
              <Row rows={10}>{handleDateForm(userWithSetting[0]?.birth_date)}</Row>
              <Row rows={10}>{userWithSetting[0]?.phone_number}</Row>
              <Row rows={10}>{handleDateForm(userWithSetting[0]?.last_login)}</Row>
              <Row rows={10}>{handleDateForm(userWithSetting[0]?.created_at)}</Row>
              {setting.allow_marketing_push ? (
                <Row rows={10}>동의</Row>
              ) : (
                <Row rows={10}>비동의</Row>
              )}
              {setting.is_active ? <Row rows={10}>활성화</Row> : <Row rows={10}>비활성화</Row>}
            </List>
          )
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
