import { setupWorker } from 'msw/browser';

import { brandHandlers } from './brandHandler';
import { categoriesHandlers } from './categoriesHandler';
import { fundingHandlers } from './fundingHandler';
import { giftHandlers } from './giftHandler';
import { paymentHandlers } from './paymentHandler';
import { productHandlers } from './productHandler';

const handlers = [
  // 생성한 handler를 import한 뒤 여기에 추가
  ...categoriesHandlers,
  ...productHandlers,
  ...brandHandlers,
  ...paymentHandlers,
  ...giftHandlers,
  ...fundingHandlers,
];

export const worker = setupWorker(...handlers);
