import { setupWorker } from 'msw/browser';

import { categoriesHandlers } from './categoriesHandler';
import { categoryBrandsHandlers } from './categoryBrandsHandler';
import { categoryHandlers } from './categoryProductsHandler';

const handlers = [
  // 생성한 handler를 import한 뒤 여기에 추가
  ...categoriesHandlers,
  ...categoryHandlers,
  ...categoryBrandsHandlers,
];

export const worker = setupWorker(...handlers);
