import styles from './index.module.scss';

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

const Thema = () => {
  const titleIdx = Math.floor(Math.random() * TITLE.length);
  return (
    <section className={styles.area_thema}>
      <strong className={styles.txt_title}>{TITLE[titleIdx]}</strong>
      <ul className={styles.wrapper_item}>
        <li>상품</li>
        <li>상품</li>
        <li>상품</li>
        <li>상품</li>
      </ul>
    </section>
  );
};

export default Thema;
