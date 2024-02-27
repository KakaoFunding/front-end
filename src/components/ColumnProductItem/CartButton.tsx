import { ProductItem } from 'types/productItem';
import styles from './CartButton.module.scss';

interface CartButtonProps {
  id: ProductItem['id'];
}

const CartButton = ({ id }: CartButtonProps) => {
  return (
    <button type="button" className={styles.btn_cart}>
      <span className={styles.ico_cart}>선물상자 담기</span>
    </button>
  );
};

export default CartButton;
