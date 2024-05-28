import styles from './index.module.scss';

type EmptyItemProps = {
  type: keyof typeof EMPTY_ITEM_TEXT;
};

const choonsikImgUrl = '/src/assets/bg_choonsik.png';

const EMPTY_ITEM_TEXT = {
  wish: {
    title: `위시리스트에\n받고싶은 선물을 담아보세요~!`,
    description: `선물 고민에 빠진 친구와, 소중한 나를 위해\n 내 취향에 맞는 선물을 위시❤️해보세요.`,
  },
  funding: {
    title: `등록된 펀딩 아이템이 없어요`,
    description: `펀딩받고 싶은 선물🎁이 있나요?\n내 취향에 맞는 선물을 등록해보세요~!`,
  },
  gift_not_used: {
    title: `사용 가능한 선물이 없어요`,
    description: `친구에게 받고 싶은 선물을 위시❤️해보세요.\n소중한 나에게 직접 선물할 수도 있어요!`,
  },
  gift_used: {
    title: `사용한 선물이 없어요`,
    description: `받은 선물🎁을 사용하고, 친구에게 고마운 마음을 표현해보세요~!`,
  },
  funding_usable: {
    title: `사용 가능한 펀딩이 없어요`,
    description: `펀딩받고 싶은 선물🎁이 있나요?\n내 취향에 맞는 선물을 등록해보세요~!`,
  },
  funding_used: {
    title: `사용한 펀딩이 없어요`,
    description: `받은 펀딩을 사용하고, 친구들에게 고마운 마음을 표현해보세요~!`,
  },
} as const;

const EmptyItem = ({ type }: EmptyItemProps) => {
  return (
    <section className={styles.wrapper_item}>
      <img
        alt="춘식이사진"
        src={choonsikImgUrl}
        className={styles.img_choonsik}
      />
      <strong className={styles.txt_title}>
        {EMPTY_ITEM_TEXT[type].title}
      </strong>
      <p className={styles.txt_desc}>{EMPTY_ITEM_TEXT[type].description} </p>
    </section>
  );
};

export default EmptyItem;
