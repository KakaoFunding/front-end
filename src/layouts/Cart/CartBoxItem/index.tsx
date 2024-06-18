import clsx from 'clsx';

import { useAxios } from 'hooks/useAxios';
import { formatNumberWithComma, formatNumberWithUnit } from 'utils/format';

import { CartItem } from 'types/cart';

import styles from './index.module.scss';

type CartBoxItemProps = {
  refetch: () => void;
  item: CartItem;
  handleSelect: (productId: number) => void;
  isSelected: boolean;
};

const CartBoxItem = ({
  refetch,
  item,
  handleSelect,
  isSelected,
}: CartBoxItemProps) => {
  const { sendRequest } = useAxios({
    method: 'delete',
    url: `cart/${item.productId}`,
  });

  const handleDelete = async () => {
    await sendRequest();
    refetch();
  };

  return (
    <div className={styles.wrapper_item}>
      <div
        className={styles.wrapper_icons}
        onClick={() => handleSelect(item.productId)}
      >
        <input type="checkbox" className={styles.btn_input} id="checkbox" />
        <span
          id="checkbox"
          className={clsx(styles.ico_input, { [styles.on]: isSelected })}
        />
        <span className={styles.ico_delete} onClick={handleDelete} />
      </div>
      <div className={styles.wrapper_prod}>
        <img
          alt={`${item.productName}상품이미지`}
          src={item.imageUrl}
          className={styles.thumb_prod}
        />
        <div>
          <p className={styles.txt_brand}>{item.brandName}</p>
          <strong className={styles.txt_prod}>{item.productName}</strong>
          {item.optionName && (
            <p className={styles.txt_option}>
              <span className={styles.ico_option} />
              {item.optionDetailName}
            </p>
          )}
        </div>
      </div>
      <div className={styles.wrapper_pay}>
        <div className={styles.wrapper_box}>
          <p className={styles.txt_info}>
            상품금액
            <span>{formatNumberWithUnit(item.productPrice)}</span>
          </p>
          <p className={styles.txt_info}>
            선택수량
            <span>x {item.quantity}개</span>
          </p>
          <p className={styles.txt_info}>
            수신인원
            <span>x 1명</span>
          </p>
        </div>
        <div className={styles.wrapper_box}>
          <p className={styles.txt_total}>
            결제금액
            <span className={styles.txt_unit}>
              <span className={styles.num_info}>
                {formatNumberWithComma(item.productPrice * item.quantity)}
              </span>
              원
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartBoxItem;
