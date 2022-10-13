import { useState } from 'react';

const useInput = () => {
  const initialInput = { email: '', password: '' };
  const [input, setInput] = useState(initialInput);
  const { email, password } = input;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  return { input, setInput, handleInputChange, initialInput, email, password };
};

export default useInput;
