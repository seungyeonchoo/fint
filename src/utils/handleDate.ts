const handleDateForm: (input: string) => string = input => {
  const date = new Date(input);
  const handleYear = date.getFullYear();
  const handleMonth = date.getMonth() + 1 < 10 ? `0${date.getMonth()}` : date.getMonth();
  const handleDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  return `${handleYear}년 ${handleMonth}월 ${handleDate}일`;
};

export default handleDateForm;
