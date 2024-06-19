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

export const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

export const isValidFundingPrice = (
  productPrice: number,
  fundingPrice: number,
) => {
  if (productPrice === fundingPrice) return true;
  if (productPrice - fundingPrice < 100) return false;
  if (fundingPrice < 100) return false;

  return true;
};
