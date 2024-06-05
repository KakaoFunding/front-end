import { useState } from 'react';

import { getHalfYearEarlierDate } from 'utils/generate';

export const useDateFilter = () => {
  const [startDate, setStartDate] = useState<Date>(getHalfYearEarlierDate());
  const [endDate, setEndDate] = useState<Date>(new Date());

  return { startDate, endDate, setStartDate, setEndDate };
};
