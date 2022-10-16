import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/Pagination/Pagination';
import GetAccountsService from '../../services/AccountService';
import AccountListFilter from './components/AccountListFilter';
import Accounts from './components/Accounts';

const AccountPage = () => {
  const { getAccountList } = new GetAccountsService();
  return (
    <>
      <Filter>
        <AccountListFilter />
      </Filter>
      <Accounts />
      <Pagination getList={getAccountList} />
    </>
  );
};

export default AccountPage;
