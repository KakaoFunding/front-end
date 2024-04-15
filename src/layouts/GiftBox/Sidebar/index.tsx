import SidebarItem from './SidebarItem';

import styles from './index.module.scss';

const Sidebar = () => {
  return (
    <>
      <title className={styles.txt_title}>My 선물하기</title>
      <ul className={styles.wrapper_sidebar}>
        <SidebarItem type="giftbox" titleName="선물함" />
        <SidebarItem type="wish" titleName="위시리스트" />
        <SidebarItem type="funding" titleName="펀딩아이템" />
        <SidebarItem type="order_history" titleName="주문내역" />
        <SidebarItem type="funding_history" titleName="펀딩내역" />
      </ul>
    </>
  );
};

export default Sidebar;
