import SidebarItem from './SidebarItem';

import styles from './index.module.scss';

const Sidebar = () => {
  return (
    <>
      <title className={styles.txt_title}>My 선물하기</title>
      <ul className={styles.wrapper_sidebar}>
        <SidebarItem type="giftbox" icon="선" titleName="선물함" />
        <SidebarItem type="funding" icon="펀" titleName="펀딩아이템" />
        <SidebarItem type="wish" icon="위" titleName="위시리스트" />
        <SidebarItem type="order-history" icon="주" titleName="주문내역" />
        <SidebarItem type="funding-history" icon="펀" titleName="펀딩내역" />
      </ul>
    </>
  );
};

export default Sidebar;
