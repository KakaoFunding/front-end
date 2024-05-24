import { useState } from 'react';

import { getHalfYearEarlierDate } from 'utils/generate';

export const useDateFilter = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(getHalfYearEarlierDate());

  return { startDate, endDate, setStartDate, setEndDate };
};
