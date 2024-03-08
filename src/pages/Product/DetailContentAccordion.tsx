import clsx from 'clsx';
import { useState } from 'react';

import styles from './DetailContentAccordion.module.scss';

type DetailContentAccordionProps = {
  title?: string;
  description?: string;
  className: {
    title: string;
    description: string;
  };
};

const DetailContentAccordion = ({
  title,
  description,
  className,
}: DetailContentAccordionProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleToggle = () => setIsToggled(!isToggled);
  return (
    <>
      <div className={clsx(className.title, styles.wrapper_title)}>
        {title}
        <button type="button" onClick={handleToggle} aria-label="toggle button">
          <span
            className={clsx(styles.ico_toggle, { [styles.on]: isToggled })}
          />
        </button>
      </div>
      {isToggled && <div className={className.description}>{description}</div>}
    </>
  );
};

export default DetailContentAccordion;
