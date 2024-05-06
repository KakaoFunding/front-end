import { useState, ChangeEvent } from 'react';

import { formatNumberWithComma } from 'utils/format';
import { isValidPrice } from 'utils/validate';

const useFundingInput = (goalFundingPrice: number) => {
  const [fundingAmount, setFundingAmount] = useState<string>('');
  const [remainingAmount, setRemainingAmount] =
    useState<number>(goalFundingPrice);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.split(',').join('');
    if (!isValidPrice(inputValue)) return;

    const newRemainingAmount = Number(inputValue);
    if (newRemainingAmount > goalFundingPrice) return;
    setFundingAmount(formatNumberWithComma(newRemainingAmount));
    setRemainingAmount(goalFundingPrice - newRemainingAmount);
  };

  const clearInput = (price: number) => {
    setFundingAmount('');
    setRemainingAmount(price);
  };

  return { fundingAmount, remainingAmount, clearInput, handleChange };
};

export default useFundingInput;
