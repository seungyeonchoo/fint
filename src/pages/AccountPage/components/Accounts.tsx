import useGetData from '../../../hooks/useGetData';
import { getAccountListRequest } from '../../../store/Slices/accountListSlice';
import { List, Row } from '../../UserPage/components/UserList';

const Accounts = () => {
  const { accounts } = useGetData(getAccountListRequest);
  const { accountList } = accounts;

  return (
    <ul>
      {accountList.map(account => {
        return (
          <List key={account.uuid}>
            <Row rows={9}>{account.user.name}</Row>
            <Row rows={9}>{account.broker_id}</Row>
            <Row rows={9}>{account.number}</Row>
            <Row rows={9}>{account.status}</Row>
            <Row rows={9}>{account.name}</Row>
            <Row rows={9}>{account.assets}</Row>
            <Row rows={9}>{account.payments}</Row>
            {account.is_active ? <Row rows={9}>활성화</Row> : <Row rows={9}>비활성화</Row>}
            <Row rows={9}>{account.created_at}</Row>
          </List>
        );
      })}
    </ul>
  );
};
export default Accounts;
