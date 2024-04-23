import type { StorybookConfig } from '@storybook/react-vite';

// storybook 기본 config 설정
const config: StorybookConfig = {
  // 스토리 파일들 경로 설정
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // 스토리북 확장 프로그램
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
