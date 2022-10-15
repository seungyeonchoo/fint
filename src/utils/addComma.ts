const addComma: (input: string) => string = input => {
  return Math.floor(Number(input)).toLocaleString();
};

export default addComma;
