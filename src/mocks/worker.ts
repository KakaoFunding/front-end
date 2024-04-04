import { setupWorker } from 'msw/browser';

import { categoriesHandlers } from './categoriesHandler';
import { categoryBrandsHandlers } from './categoryBrandsHandler';
import { productHandlers } from './productHandler';

const handlers = [
  // 생성한 handler를 import한 뒤 여기에 추가
  ...categoriesHandlers,
  ...productHandlers,
  ...categoryBrandsHandlers,
];

export const worker = setupWorker(...handlers);
