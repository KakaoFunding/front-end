import type { Meta, StoryObj } from '@storybook/react';

import ProfileImg from 'components/feature/ProfileImg';

const meta: Meta<typeof ProfileImg> = {
  component: ProfileImg,
  title: 'Component/ProfileImg',
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div style={{ lineHeight: 2, marginTop: 5 }}>
          <h1 style={{ fontWeight: 900 }}>🌟사이즈별 컴포넌트 사용위치🌟</h1>
          <p>▪️ xxs : 선물하기 버튼 내부</p>
          <p>▪️ xs : 메인페이지 친구 선택</p>
          <p>▪️ s : 주문완료</p>
          <p>▪️ m : 리뷰</p>
          <p>▪️ l : 메인 페이지</p>
          <p>▪️ xl : 마이 페이지</p>
        </div>
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProfileImg>;

export const ProfileWithImg: Story = {
  args: {
    size: 'xxs',
    imgUrl: 'src/assets/profile.png',
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};
