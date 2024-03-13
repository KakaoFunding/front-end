export const isValidQuantity = (inputValue: string): boolean => {
  const quantity = Number(inputValue);

  if (Number.isNaN(quantity) || quantity < 1) {
    return false;
  }

  return true;
};
