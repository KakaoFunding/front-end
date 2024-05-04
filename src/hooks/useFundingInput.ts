import { useState, ChangeEvent } from 'react';

import { formatNumberWithComma } from 'utils/format';
import { isValidPrice } from 'utils/validation';

const useFundingInput = (maxFundingAmount: number) => {
  const [input, setInput] = useState<string>('0');
  const [remainingAmount, setRemainingAmount] =
    useState<number>(maxFundingAmount);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.split(',').join('');
    if (!isValidPrice(inputValue)) return;

    let newInputValue = Number(inputValue);
    if (newInputValue > maxFundingAmount) {
      newInputValue = maxFundingAmount;
    }
    setInput(formatNumberWithComma(newInputValue));
    setRemainingAmount(maxFundingAmount - newInputValue);
  };

  const clearInput = () => {
    setInput('0');
    setRemainingAmount(maxFundingAmount);
  };

  return {
    input,
    remainingAmount,
    clearInput,
    handleChange,
  };
};

export default useFundingInput;
