const isZero = (target: string): boolean => {
  const pattern = /^0+$/;
  return pattern.test(target);
};

const isUnsignedInteger = (target: string) => {
  const pattern = /^\d+$/;
  return pattern.test(target);
};

const isPositiveInteger = (target: string): boolean => {
  return isUnsignedInteger(target) && !isZero(target);
};

export const isValidQuantity = (quantity: string): boolean => {
  return isPositiveInteger(quantity);
};

export const isValidPrice = (price: string): boolean => {
  return isPositiveInteger(price) || isZero(price);
};
