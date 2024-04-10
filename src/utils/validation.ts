export const isValidQuantity = (inputValue: string): boolean => {
  const quantity = Number(inputValue);

  if (quantity === 0) return true;

  if (Number.isNaN(quantity) || !Number.isInteger(quantity) || quantity < 1) {
    return false;
  }

  return true;
};
