import type { Meta, StoryObj } from '@storybook/react';

import Tabs from 'components/ui/Tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Tabs',
  decorators: [
    (Story) => (
      <div style={{ width: 1280 }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const BaseTabs: Story = {
  args: {
    initialTabId: 0,
    tabs: [
      {
        id: 0,
        name: '예시 탭',
        description: '10,000',
        content: '첫 번째 탭 콘텐츠입니다.',
      },
      {
        id: 1,
        name: '두 번째 탭',
        description: '(999)',
        content: '두 번째 탭 콘텐츠입니다.',
      },
      {
        id: 2,
        name: '탭 삼',
        content: '세 번째 탭 콘텐츠입니다.',
      },
    ],
  },
};
