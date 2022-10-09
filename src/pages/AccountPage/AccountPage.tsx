import Filter from '../../components/Filter/Filter';
import AccountListFilter from './components/AccountListFilter';
import Accounts from './components/Accounts';

const AccountPage = () => {
  return (
    <>
      <Filter>
        <AccountListFilter />
      </Filter>
      <Accounts />
    </>
  );
};

export default AccountPage;
