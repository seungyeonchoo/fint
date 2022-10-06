import useAccountList from '../../../hooks/useAccountList';

const Accounts = () => {
  const { accountList } = useAccountList();

  return (
    <ul>
      {accountList.map(account => {
        return (
          <li key={account.uuid}>
            <div>{account.broker_id}</div>
            <div>{account.assets}</div>
            <div>{account.payments}</div>
            <div>{account.created_at}</div>
            <div>{account.id}</div>
            <div>{account.userId}</div>
          </li>
        );
      })}
    </ul>
  );
};
export default Accounts;
