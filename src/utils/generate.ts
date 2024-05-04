export function getRandomNumber(start: number, end: number): number {
  return Math.floor(start + Math.random() * end);
}

export const getOneYearLaterDate = () => {
  const currentDate = new Date();
  const oneYearLaterDate = new Date(
    currentDate.getFullYear() + 1,
    currentDate.getMonth(),
    currentDate.getDate(),
  );
  return oneYearLaterDate;
};
