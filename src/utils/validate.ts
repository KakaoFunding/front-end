export const isZero = (target: string) => {
  const pattern = /^0+$/;
  return pattern.test(target);
};

export const isUnsignedInteger = (target: string) => {
  const pattern = /^\d+$/;
  return pattern.test(target);
};

export const isPositiveInteger = (target: string) => {
  return isUnsignedInteger(target) && !isZero(target);
};

export const isValidQuantity = (quantity: string) => {
  return isPositiveInteger(quantity);
};

export const isValidPrice = (price: string) => {
  return isPositiveInteger(price) || isZero(price);
};
