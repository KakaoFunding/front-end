import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

import styles from './index.module.scss';

type SidebarItemProps = {
  type: 'wish' | 'funding' | 'giftbox' | 'order-history' | 'funding-history';
  icon: string;
  titleName: string;
};

const SidebarItem = ({ type, icon, titleName }: SidebarItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === `/mypage/${type}`;

  return (
    <Link to={`${type}`}>
      <li className={clsx(styles.wrapper_item, { [styles.on]: isActive })}>
        <span className={styles.ico}>{icon}</span>
        {titleName}
      </li>
    </Link>
  );
};

export default SidebarItem;
