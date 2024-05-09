import styles from './index.module.scss';

const data = {
  userName: '보경',
};

const OrderHistory = () => {
  return (
    <>
      <div className={styles.title}>{`${data.userName}님의 \n주문내역`}</div>
      <ul>
        <li>주문내역1</li>
        <li>주문내역2</li>
        <li>주문내역3</li>
      </ul>
    </>
  );
};

export default OrderHistory;
