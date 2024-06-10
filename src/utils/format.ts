export const formatCommaToNumber = (string: string): number => {
  const number = Number(string.replace(/,/g, ''));
  return number;
};

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
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

/**
 * Format date and time as yyyy.mm.dd hh:mm:ss
 * @param dateTime yyyy-mm-ddT:hh:mm:ss
 * @returns formatted date and time (yyyy.mm.dd hh:mm:ss)
 */
export const formatDateAndTime = (dateTime: string) => {
  const [date, time] = dateTime.split('T');

  const formattedDate = date.split('-').join('.');

  return `${formattedDate} ${time}`;
};

export const formatBirthDate = (birthDate: string) => {
  const formattedBirthDate = birthDate.split('-');
  const [year, month, day] = formattedBirthDate;

  return { year, month, day };
};
