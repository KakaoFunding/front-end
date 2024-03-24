export const formatNumberWithComma = (number: number): string => {
  return number.toLocaleString('ko-KR');
};

export const formatNumberWidhUnit = (number: number): string => {
  return `${formatNumberWithComma(number)}원`;
};
