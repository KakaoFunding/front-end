import styles from './index.module.scss';

const CategoryButton = () => {
  return (
    <section className={styles.area_category}>
      <button type="button" className={styles.category_btn}>
        <span className={styles.ico_category}>카테고리</span>
        카테고리
      </button>
    </section>
  );
};

export default CategoryButton;
