import EmptyItem from 'components/feature/EmptyItem';

import styles from './index.module.scss';

const data = {
  userName: '보경',
  hasWish: true,
};

const Wish = () => {
  return (
    <>
      <div className={styles.title}>{`${data.userName}님의 \n위시리스트`}</div>
      {data.hasWish ? (
        <ul>
          <li>위시 1</li>
          <li>위시 2</li>
          <li>위시 3</li>
        </ul>
      ) : (
        <EmptyItem type="wish" />
      )}
    </>
  );
};

export default Wish;
