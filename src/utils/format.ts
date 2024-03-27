export const formatNumberWithComma = (number: number): string => {
  return number.toLocaleString('ko-KR');
};

export const formatNumberWithUnit = (number: number): string => {
  return `${formatNumberWithComma(number)}원`;
};
