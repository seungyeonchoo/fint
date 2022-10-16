const handleGender = (input: number) => {
  return input === 1 || input === 3 ? '남성' : '여성';
};

export default handleGender;
