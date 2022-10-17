import useGetData from '../../../hooks/useGetData';
import styled from 'styled-components';
import { getUserListRequest, getUserSettingRequest } from '../../../store/Slices/userListSlice';
import Title from './Title';
import handleDateForm from '../../../utils/handleDate';
import { Users, UserSettings } from '../../../types/types';
import handleGender from '../../../utils/handleGender';

const UserList = () => {
  const { users, nav } = useGetData(getUserListRequest, getUserSettingRequest);
  const { userList, userSettings } = users;

  return (
    <ListBox>
      <Title />
      {userSettings.map((setting: UserSettings) => {
        const userWithSetting = userList.filter((user: Users) => user.uuid === setting.uuid);
        return (
          userWithSetting[0] && (
            <List key={setting.uuid}>
              <Row rows={10} onClick={() => nav(`/users/${userWithSetting[0]?.id}`)}>
                {userWithSetting[0]?.name}
              </Row>
              <Row rows={10}>{userWithSetting[0]?.email}</Row>
              <Row rows={10}>{userWithSetting[0]?.accounts.length}</Row>
              <Row rows={10}>{handleGender(userWithSetting[0]?.gender_origin)}</Row>
              <Row rows={10}>{handleDateForm(userWithSetting[0]?.birth_date)}</Row>
              <Row rows={10}>{userWithSetting[0]?.phone_number}</Row>
              <Row rows={10}>{handleDateForm(userWithSetting[0]?.last_login)}</Row>
              <Row rows={10}>{handleDateForm(userWithSetting[0]?.created_at)}</Row>
              <Row rows={10}>{setting.allow_marketing_push ? '동의' : '비동의'}</Row>
              <Row rows={10}>{setting.is_active ? '활성화' : '비활성화'}</Row>
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
