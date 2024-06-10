import styles from './index.module.scss';

const EmptyCartBoxBody = () => {
  return (
    <section className={styles.wrapper_empty}>
      <span className={styles.ico_empty_cart} />
      선물상자가 비어있어요.
    </section>
  );
};

export default EmptyCartBoxBody;
