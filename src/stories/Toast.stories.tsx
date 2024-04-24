import type { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';

import Toast from 'components/ui/Toast';

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'Component/Toast',
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

type Story = StoryObj<typeof Toast>;

export const AddWishForFriendToast: Story = {
  args: {
    message: 'ADD_WISH_FOR_FRIEND',
    isLinked: true,
    linkTo: 'WISH',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const AddWishForMeToast: Story = {
  args: {
    message: 'ADD_WISH_FOR_ME',
    isLinked: true,
    linkTo: 'WISH',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const DeleteWishToast: Story = {
  args: {
    message: 'DELETE_WISH',
    isLinked: false,
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const AddFundingToast: Story = {
  args: {
    message: 'ADD_FUNDING',
    isLinked: true,
    linkTo: 'FUNDING',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const DeleteFundingToast: Story = {
  args: {
    message: 'DELETE_FUNDING',
    isLinked: false,
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const AddCartToast: Story = {
  args: {
    message: 'ADD_CART',
    isLinked: true,
    linkTo: 'CART',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const DeleteCartToast: Story = {
  args: {
    message: 'DELETE_CART',
    isLinked: false,
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};
