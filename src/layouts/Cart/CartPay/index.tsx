import clsx from 'clsx';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/ui/Button';

import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';

import { useKakaoPicker } from 'hooks/useKakaoPicker';
import { useLogin } from 'hooks/useLogin';
import { formatNumberWithUnit } from 'utils/format';

import { CartItem } from 'types/cart';
import { RequestOrderPreview } from 'types/payment';

import DefaultProfileImage from 'assets/profile_noimg.png';

import BillItem from './BillItem';

import styles from './index.module.scss';

type CartPayProps = {
  selectedItems: CartItem[];
  totalPayment: number;
};

const CartPay = ({ selectedItems, totalPayment }: CartPayProps) => {
  const [isToggled, handleToggle] = useReducer((prev) => !prev, false);
  const { checkLoginBeforeAction } = useLogin();
  const { openKakaoPicker } = useKakaoPicker();
  const { isSelected, isSelfSelected, selectedFriends, getImgUrl } =
    useSelectedFriendsStore();
  const navigate = useNavigate();

  const orderInfos: RequestOrderPreview = [
    {
      productId: 1361966,
      quantity: 1,
      options: [],
    },
  ];

  // 나에게 선물하기 버튼 핸들러
  const handleClickGiftForMe = () => {
    checkLoginBeforeAction(() => {
      navigate('/bill/gift', { state: { orderInfos, giftFor: 'me' } });
    });
  };

  // 친구에게 선물하기 버튼 핸들러
  const handleClickGiftForFriend = () => {
    checkLoginBeforeAction(() => {
      if (!isSelected) {
        openKakaoPicker();
        return;
      }

      if (isSelfSelected) {
        navigate('/bill/gift', { state: { orderInfos, giftFor: 'me' } });
      } else if (selectedFriends.length === 1) {
        navigate('/bill/gift', { state: { orderInfos, giftFor: 'friends' } });
      } else {
        alert('지금은 한 번에 한 명에게만 선물할 수 있어요.');
      }
    });
  };

  // 친구 프로필 이미지 클릭 핸들러
  const handleClickProfile = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    openKakaoPicker();
  };

  return (
    <section className={styles.area_cart_pay}>
      <div className={styles.wrapper_bills}>
        <div className={styles.line_bills} />
        <div
          className={clsx(styles.wrapper_items, { [styles.on]: !isToggled })}
        >
          {isToggled && (
            <ul className={styles.scroll}>
              {selectedItems.map((item) => (
                <li key={item.cartId}>
                  <BillItem />
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button onClick={handleToggle} color="white" className={styles.btn}>
          <strong>총 결제 금액</strong>
          <em className={styles.num_price}>
            {formatNumberWithUnit(totalPayment)}
            <span
              className={clsx(styles.ico_toggle, { [styles.on]: isToggled })}
            >
              펼치기
            </span>
          </em>
        </Button>
      </div>

      <div
        className={clsx(styles.wrapper_buttons, {
          [styles.is_selected]: isSelected,
        })}
      >
        {!isSelected ? (
          <>
            <Button color="black" onClick={handleClickGiftForMe}>
              나에게 선물하기
            </Button>
            <Button color="yellow" onClick={handleClickGiftForFriend}>
              <div
                className={styles.wrapper_profile}
                onClick={handleClickProfile}
              >
                <img
                  src={getImgUrl(DefaultProfileImage)}
                  alt="선물할 친구 프로필 사진"
                  className={styles.img_profile}
                />
                <span className={styles.ico_profile} />
              </div>
              선물하기
            </Button>
          </>
        ) : (
          <Button color="yellow" onClick={handleClickGiftForFriend}>
            <div
              className={styles.wrapper_profile}
              onClick={handleClickProfile}
            >
              <img
                src={getImgUrl(DefaultProfileImage)}
                alt="선물할 친구 프로필 사진"
                className={styles.img_profile}
              />
              <span className={styles.ico_profile} />
            </div>
            선물하기
          </Button>
        )}
      </div>
      <p className={styles.txt_cart_pay}>
        선물상자에 담은 상품은 최대 30일간 보관됩니다.
      </p>
    </section>
  );
};

export default CartPay;
