import { setupWorker } from 'msw/browser';

import { categoriesHandlers } from './categoriesHandler';

const handlers = [
  // 생성한 handler를 import한 뒤 여기에 추가
  ...categoriesHandlers,
];

export const worker = setupWorker(...handlers);
