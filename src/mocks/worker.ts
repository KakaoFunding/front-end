import { setupWorker } from 'msw/browser';

import { brandHandlers } from './brandHandler';
import { categoriesHandlers } from './categoriesHandler';
import { productHandlers } from './productHandler';

const handlers = [
  // 생성한 handler를 import한 뒤 여기에 추가
  ...categoriesHandlers,
  ...productHandlers,
  ...brandHandlers,
];

export const worker = setupWorker(...handlers);
