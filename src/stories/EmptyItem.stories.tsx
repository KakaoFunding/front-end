import type { Meta, StoryObj } from '@storybook/react';

import EmptyItem from 'components/feature/EmptyItem';

const meta: Meta<typeof EmptyItem> = {
  component: EmptyItem,
  title: 'Component/EmptyItem',
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmptyItem>;

export const WishEmptyItem: Story = {
  args: {
    type: 'wish',
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export const FundingProfileWithImg: Story = {
  args: {
    type: 'funding',
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};
