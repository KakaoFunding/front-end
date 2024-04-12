import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

import styles from './index.module.scss';

type SidebarItemProps = {
  type: 'wish' | 'funding' | 'giftbox' | 'order_history' | 'funding_history';
  titleName: string;
};

const SidebarItem = ({ type, titleName }: SidebarItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === `/mypage/${type}`;

  return (
    <Link to={`${type}`}>
      <li className={clsx(styles.wrapper_item, { [styles.on]: isActive })}>
        <span
          className={clsx(styles.ico, styles[type], { [styles.on]: isActive })}
        />
        {titleName}
      </li>
    </Link>
  );
};

export default SidebarItem;
