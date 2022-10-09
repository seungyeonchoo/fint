import { ACCOUNT_STATUS } from './constant';

const handleAccountStatus = (value: number) => {
  return Object.keys(ACCOUNT_STATUS).find(key => ACCOUNT_STATUS[key] === value);
};

export default handleAccountStatus;
