import { useState, ChangeEvent } from 'react';

import { formatNumberWithComma } from 'utils/format';
import { isValidPrice } from 'utils/validation';

const useRemainingFunding = (goalFundingPrice: number) => {
  const [input, setInput] = useState<string>('');
  const [change, setChange] = useState<number>(goalFundingPrice);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.split(',').join('');
    if (!isValidPrice(inputValue)) return;

    const newChange = Number(inputValue);
    if (newChange > goalFundingPrice) return;
    setInput(formatNumberWithComma(newChange));
    setChange(goalFundingPrice - newChange);
  };

  return { input, change, handleChange };
};

export default useRemainingFunding;
