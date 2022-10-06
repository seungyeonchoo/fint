import useAccountList from '../../../hooks/useAccountList';

const Title = () => {
  const { accountList } = useAccountList();
  console.log(accountList);

  return <div>title</div>;
};

export default Title;
