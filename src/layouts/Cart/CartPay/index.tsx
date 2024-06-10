import clsx from 'clsx';
import { useReducer } from 'react';

import { Button } from 'components/ui/Button';

import BillItem from './BillItem';

import styles from './index.module.scss';

// TODO : 가짜 상품데이터
const prod = [1, 2, 3];

const CartPay = () => {
  const [isToggled, handleToggle] = useReducer((prev) => !prev, false);

  return (
    <section className={styles.area_cart_pay}>
      <div className={styles.wrapper_bills}>
        <div className={styles.line_bills} />
        {isToggled && (
          <ul>
            {prod.map((it) => (
              <li key={it}>
                <BillItem />
              </li>
            ))}
          </ul>
        )}
        <Button onClick={handleToggle} color="white" className={styles.btn}>
          <strong>총 결제 금액</strong>
          <em className={styles.num_price}>
            57,900원
            <span
              className={clsx(styles.ico_toggle, { [styles.on]: isToggled })}
            >
              펼치기
            </span>
          </em>
        </Button>
      </div>

      <div className={styles.wrapper_buttons}>
        <Button
          color="black"
          // onClick={handleClickGiftForMe}
        >
          나에게 선물하기
        </Button>
        <Button
          color="yellow"
          // onClick={handleClickGiftForFriend}
        >
          <div className={styles.wrapper_profile}>
            {/* onClick={handleClickProfile} */}
            <img
              // src={getImgUrl(DefaultProfileImage)}
              // alt="선물할 친구 프로필 사진"
              alt="사진"
              className={styles.img_profile}
            />
            <span className={styles.ico_profile} />
          </div>
          선물하기
        </Button>
      </div>
      <p className={styles.txt_cart_pay}>
        선물상자에 담은 상품은 최대 30일간 보관됩니다.
      </p>
    </section>
  );
};

export default CartPay;
