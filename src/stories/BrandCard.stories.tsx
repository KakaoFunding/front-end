import type { Meta, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';

import BrandCard from 'components/feature/BrandCard';

import { Brand } from 'types/Brand';

const meta: Meta<typeof BrandCard> = {
  title: 'Brand/BrandCard',
  component: BrandCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BrandCard>;

const BrandData: Brand & { category: string } = {
  brandId: 0,
  name: '자일로큐브캔디',
  iconPhoto:
    'https://img1.kakaocdn.net/thumb/C130x128@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20230303114113_a2ed22bb41f64f0aa6a02141f5d413f1.png',
  category: '식품>디저트',
};

export const Medium: Story = {
  args: {
    ...BrandData,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...BrandData,
    size: 'large',
  },
};
