const isZero = (target: number): boolean => target === 0;

const isPositiveInteger = (target: number): boolean => {
  return !Number.isInteger(target) || target > 0;
};

export const isValidQuantity = (target: string): boolean => {
  const quantity = Number(target);

  if (Number.isNaN(quantity)) return false;

  return isPositiveInteger(quantity);
};

export const isValidPrice = (target: string): boolean => {
  const price = Number(target);

  if (Number.isNaN(price)) return false;

  return isPositiveInteger(price) || isZero(price);
};
