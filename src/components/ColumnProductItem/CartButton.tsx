import { ProductItem } from 'types/productItem';
import styles from './CartButton.module.scss';

interface CartButtonProps {
  id: ProductItem['id'];
}

const CartButton = ({ id }: CartButtonProps) => {
  return (
    <button type="button" className={styles.cart_btn}>
      <span className={styles.cart_icon}>선물상자 담기</span>
    </button>
  );
};

export default CartButton;
