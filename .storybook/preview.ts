// 모든 스토리들에 글로벌하게 적용될 포멧 세팅
import type { Preview } from '@storybook/react';

// npx sb init으로 설정된 기본 값
const preview: Preview = {
  parameters: {
    // 글로벌하게 argType에 on으로 시작하는 이벤트 핸들러 함수를 모두 허용하는 정규식을 적어주면
    // actions 탭에서 이벤트가 발생하는 것을 감지할 수 있다.
    actions: { argTypesRegex: '^on[A-Z].*' },
    // 해당 데이터 타입을 가진 속성을 만났을 때
    // 정규표현식을 통해 데이터타입에 따라 storybook은 이들을 적절하게 테스팅할 수 있도록 매칭해줄 것.
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
