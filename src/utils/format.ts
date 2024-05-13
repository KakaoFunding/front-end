export const formatNumberWithComma = (number: number): string => {
  return number.toLocaleString('ko-KR');
};

export const formatNumberWithUnit = (number: number): string => {
  return `${formatNumberWithComma(number)}원`;
};

export const formatNumberWithPlus = (
  number: number,
  maxNumber: number,
): string => {
  if (number >= maxNumber) {
    return `${formatNumberWithComma(maxNumber - 1)}+`;
  }
  return formatNumberWithComma(number);
};

export const formatNumberToPercent = (
  numerator: number,
  denominator: number,
): string => {
  const percent = (numerator / denominator) * 100;
  return `${percent.toFixed(1)}%`;
};

/**
 * Format date as yyyy-mm-dd
 * @param date date to format
 * @returns formatted date (yyyy-mm-dd)
 */
export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.toLocaleDateString('default', { month: '2-digit' });
  const day = date.toLocaleDateString('default', { day: '2-digit' });

  return `${year}-${month}-${day}`;
};
