import clsx from 'clsx';

import { formatNumberWithComma, formatNumberWithUnit } from 'utils/format';

import styles from './index.module.scss';

const data = {
  cartId: 1,
  productId: 101,
  optionId: 201,
  optionDetailId: 301,
  productName:
    '"독일 명품 비타민" 오쏘몰 이뮨 멀티비타민&미네랄 7입 - 단독 카톤박스 배송',
  brandName: '오쏘몰',
  quantity: 2,
  productPrice: 38000,
  imageUrl:
    'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240605140558_d7afcc696ee4488abe48fdb21864c1f9.jpg',
  optionName: 'dd',
  optionDetailName: '',
  totalPrice: 76000,
};
const hasOption = true;
const isSelect = true;
const CartBoxItem = () => {
  return (
    <div className={styles.wrapper_item}>
      <div className={styles.wrapper_icons}>
        <input type="checkbox" className={styles.btn_input} id="checkbox" />
        <span
          id="checkbox"
          className={clsx(styles.ico_input, { [styles.on]: isSelect })}
        />

        <span className={styles.ico_delete} />
      </div>
      <div className={styles.wrapper_prod}>
        <img
          alt={`${data.productName}상품이미지`}
          src={data.imageUrl}
          className={styles.thumb_prod}
        />
        <div>
          <p className={styles.txt_brand}>{data.brandName}</p>
          <strong className={styles.txt_prod}>{data.productName}</strong>
          {hasOption && (
            <p className={styles.txt_option}>
              <span className={styles.ico_option} />
              {data.optionName}
            </p>
          )}
        </div>
      </div>
      <div className={styles.wrapper_pay}>
        <div className={styles.wrapper_box}>
          <p className={styles.txt_info}>
            상품금액
            <span>{formatNumberWithUnit(data.productPrice)}</span>
          </p>
          <p className={styles.txt_info}>
            선택수량
            <span>x {data.quantity}개</span>
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
                {formatNumberWithComma(data.productPrice)}
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
