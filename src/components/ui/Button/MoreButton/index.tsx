import clsx from 'clsx';

import styles from './index.module.scss';

type MoreButtonProps = {
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  size: 'small' | 'medium';
};

const MoreButton = ({ onClick, size }: MoreButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(styles.btn_more, styles[size])}
      onClick={onClick}
    >
      더보기
      <span className={styles.ico_more} />
    </button>
  );
};

export default MoreButton;
