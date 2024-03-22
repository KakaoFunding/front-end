export const isValidQuantity = (inputValue: string): boolean => {
  const quantity = Number(inputValue);

  if (Number.isNaN(quantity) || !Number.isInteger(quantity) || quantity < 1) {
    return false;
  }

  return true;
};
