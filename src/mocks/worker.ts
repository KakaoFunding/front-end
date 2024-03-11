import { setupWorker } from 'msw/browser';

const handlers = [
  // 생성한 handler를 import한 뒤 여기에 추가
];

export const worker = setupWorker(...handlers);
