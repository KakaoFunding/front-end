import clsx from 'clsx';

import styles from './index.module.scss';

type SliderArrowButtonProps = {
  arrowType: 'prev' | 'next';
  className?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const SliderArrowButton = ({
  arrowType,
  className,
  onClick,
}: SliderArrowButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(styles.btn_arrow, styles[`btn_${arrowType}`])}
      onClick={onClick}
      disabled={className?.includes('slick-disabled')}
    >
      <span className={styles[`ico_${arrowType}`]}>
        {arrowType === 'prev' ? '이전' : '다음'}
      </span>
    </button>
  );
};

export default SliderArrowButton;
