import { useState } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue(initialValue);
  };

  return { value, setValue, handleInput, handleClear };
};
