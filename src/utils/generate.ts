export function getRandomNumber(start: number, end: number): number {
  return Math.floor(start + Math.random() * end);
}

export const getOneYearLaterDate = (date?: string) => {
  const currentDate = date ? new Date(date) : new Date();
  const oneYearLaterDate = new Date(
    currentDate.getFullYear() + 1,
    currentDate.getMonth(),
    currentDate.getDate(),
  );
  return oneYearLaterDate;
};

export const getHalfYearEarlierDate = () => {
  const currentDate = new Date();
  const halfYearEarlierDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 6,
    currentDate.getDate(),
  );
  return halfYearEarlierDate;
};

export const getDDay = (date: string): number => {
  const diffTime = new Date(date).getTime() - new Date().getTime(); // 시간 차이, 단위: ms
  const DDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 밀리초 / 1일

  return DDay;
};
