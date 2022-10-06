import useGetData from '../../../hooks/useGetData';
import { getAccountListRequest } from '../../../store/Slices/accountListSlice';

const Accounts = () => {
  const { accounts } = useGetData(getAccountListRequest);
  const { accountList } = accounts;

  return (
    <ul>
      {accountList.map(account => {
        return (
          <li key={account.uuid}>
            <div>{account.user.name}</div>
            <div>{account.broker_id}</div>
            <div>{account.number}</div>
            <div>{account.status}</div>
            <div>{account.name}</div>
            <div>{account.assets}</div>
            <div>{account.payments}</div>
            {account.is_active ? <div>활성화</div> : <div>비활성화</div>}
            <div>{account.created_at}</div>
          </li>
        );
      })}
    </ul>
  );
};
export default Accounts;
