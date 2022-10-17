import useGetData from '../../../hooks/useGetData';
import { getAccountListRequest } from '../../../store/Slices/accountListSlice';
import { List, ListBox, Row } from '../../UserPage/components/UserList';
import Title from './Title';
import { BROKERS } from '../../../utils/constant';
import handleAccountStatus from '../../../utils/handleAccountStatus';
import handleDateForm from '../../../utils/handleDate';
import addComma from '../../../utils/addComma';

const Accounts = () => {
  const { accounts, nav } = useGetData(getAccountListRequest);
  const { accountList } = accounts;

  return (
    <ListBox>
      <Title />
      {accountList.map(account => {
        return (
          <List key={account.uuid}>
            <Row rows={9} onClick={() => nav(`/users/${account.userId}`)}>
              {account.user.name}
            </Row>
            <Row rows={9}>{BROKERS[account.broker_id]}</Row>
            <Row rows={9} onClick={() => nav(`/accounts/${account.number}`)}>
              {account.number}
            </Row>
            <Row rows={9}>{handleAccountStatus(account.status)}</Row>
            <Row rows={9}>{account.name}</Row>
            <Row rows={9}>{addComma(account.assets)}원</Row>
            <Row rows={9}>{addComma(account.payments)}원</Row>
            {account.is_active ? <Row rows={9}>활성화</Row> : <Row rows={9}>비활성화</Row>}
            <Row rows={9}>{handleDateForm(account.created_at)}</Row>
          </List>
        );
      })}
    </ListBox>
  );
};
export default Accounts;
