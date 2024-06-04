import { formatDate } from 'utils/format';

import { PaginationResponse } from 'types/PaginationResponse';
import {
  ContributedFundingItem,
  RegisteredFundingItem,
} from 'types/fundingHistory';

import { apiV1 } from '.';

export const getContributedFundingHistory = async (
  startDate: Date,
  endDate: Date,
) => {
  const contributedFundingHistory = await apiV1.get(
    `/fundingDetail?startDate=${formatDate(startDate)}&endDate=${formatDate(endDate)}`,
  );

  return contributedFundingHistory.data as PaginationResponse<ContributedFundingItem>;
};

export const getRegisteredFundingItem = async (
  startDate: Date,
  endDate: Date,
) => {
  const registeredFundingItem = await apiV1.get(
    `/members/funding/products?startDate=${formatDate(startDate)}&endDate=${formatDate(endDate)}`,
  );

  return registeredFundingItem.data as PaginationResponse<RegisteredFundingItem>;
};
