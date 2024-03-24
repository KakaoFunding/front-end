import { setupWorker } from 'msw/browser';

import { categoriesHandlers } from './categoriesHandler';
import { categoryHandlers } from './categoryProductsHandler';

const handlers = [
  // 생성한 handler를 import한 뒤 여기에 추가
  ...categoriesHandlers,
  ...categoryHandlers,
];

export const worker = setupWorker(...handlers);
