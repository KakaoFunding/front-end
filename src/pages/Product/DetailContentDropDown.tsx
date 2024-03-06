import clsx from 'clsx';
import { useState } from 'react';

import styles from './DetailContentDropDown.module.scss';

type DetailContentDropDownProps = {
  title?: string;
  description?: string;
  className: {
    title: string;
    description: 'string';
  };
};

const DetailContentDropDown = ({
  title,
  description,
  className,
}: DetailContentDropDownProps) => {
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

export default DetailContentDropDown;
