import ThemaList from './ThemaList';

const TITLE = [
  '전하고픈 마음 가득 담아',
  '센스 넘치는 선물',
  '이런 선물 어때요 ?',
  '남녀노소 모두 좋아하는 선물',
  '반짝반짝 빛나는 마음',
  '부담 없이 마음을 전해요',
  '말없이 응원하고 싶을 때🍀',
  '이런 선물도 좋을 것 같아요.',
  '귀여운 게 최고야',
  '달콤한 진심을 전하는 선물',
  '고마운 사람들에게 전해요🎁',
  '변치 않는 마음을 전해요',
  '지금 안 사면 손해입니다 🚨',
  '전하고픈 마음 가득 담아',
  '활용도 높은 집들이 선물',
  '마음을 전하는 빛나는 선물',
];

const CATEGORY_ID = [
  170, 171, 172, 176, 177, 178, 179, 181, 182, 184, 185, 188, 192, 194, 195,
  196, 202, 203, 204, 205,
];

const getRandomCategoryId = () => {
  const categoryIdx = Math.floor(Math.random() * CATEGORY_ID.length);
  return CATEGORY_ID[categoryIdx];
};

const getRandomTitle = () => {
  const titleIdx = Math.floor(Math.random() * TITLE.length);
  return TITLE[titleIdx];
};

const Thema = () => {
  return (
    <>
      <ThemaList categoryId={getRandomCategoryId()} title={getRandomTitle()} />
      <ThemaList categoryId={getRandomCategoryId()} title={getRandomTitle()} />
      <ThemaList categoryId={getRandomCategoryId()} title={getRandomTitle()} />
      <ThemaList categoryId={getRandomCategoryId()} title={getRandomTitle()} />
      <ThemaList categoryId={getRandomCategoryId()} title={getRandomTitle()} />
      <ThemaList categoryId={getRandomCategoryId()} title={getRandomTitle()} />
      <ThemaList categoryId={getRandomCategoryId()} title={getRandomTitle()} />
    </>
  );
};

export default Thema;
