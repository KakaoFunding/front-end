import clsx from 'clsx';

import styles from './index.module.scss';

type SliderArrowButtonProps = {
  arrowType: 'prev' | 'next';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const SliderArrowButton = ({ arrowType, onClick }: SliderArrowButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(styles.btn_arrow, styles[`btn_${arrowType}`])}
      onClick={onClick}
    >
      <span className={styles[`ico_${arrowType}`]}>
        {arrowType === 'prev' ? '이전' : '다음'}
      </span>
    </button>
  );
};

export default SliderArrowButton;
