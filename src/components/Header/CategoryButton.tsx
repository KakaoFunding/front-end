import styles from './index.module.scss';

const CategoryButton = () => {
  return (
    <section className={styles.wrapper_category}>
      <button type="button" className={styles.btn}>
        <span className={styles.ico}>카테고리</span>
        카테고리
      </button>
    </section>
  );
};

export default CategoryButton;
