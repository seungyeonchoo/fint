import useFilter from '../../../hooks/useFilter';
import { ACCOUNT_STATUS, BROKERS } from '../../../utils/constant';

const AccountListFilter = () => {
  const { handleFilter } = useFilter();
  const status = ACCOUNT_STATUS;
  const brokers = BROKERS;
  return (
    <>
      <select onChange={handleFilter} name="is_active">
        <option value="null">활성화 여부</option>
        <option value="true">활성화</option>
        <option value="false">비활성화</option>
      </select>
      <select onChange={handleFilter} name="status">
        <option value="null">계좌 상태</option>
        {Object.keys(status).map(key => (
          <option key={key} value={status[key]}>
            {key}
          </option>
        ))}
      </select>
      <select onChange={handleFilter} name="broker_id">
        <option value="null">브로커명</option>
        {Object.keys(brokers).map(key => (
          <option key={key} value={key}>
            {brokers[key]}
          </option>
        ))}
      </select>
    </>
  );
};

export default AccountListFilter;
