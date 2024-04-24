import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const TOAST_MESSAGE = {
  ADD_WISH_FOR_FRIEND: "위시에 '친구공개'로 담았어요!",
  ADD_WISH_FOR_ME: "위시에 '나만보기'로 담았어요!",
  DELETE_WISH: '취소! 위시에서 삭제할게요',
  ADD_FUNDING: '상품을 펀딩에 등록했어요!',
  DELETE_FUNDING: '펀딩이 성공적으로 취소되었어요',
  ADD_CART: '상품을 장바구니에 담았습니다!',
  DELETE_CART: '장바구니에서 상품을 제거했어요',
} as const;

const TOAST_LINK = {
  WISH: '/mypage/wish',
  FUNDING: '/mypage/funding',
  CART: '/cart',
} as const;

type MessageType = keyof typeof TOAST_MESSAGE;
type LinkType = keyof typeof TOAST_LINK;

type ToastProps = {
  isLinked: boolean;
  message: MessageType;
  linkTo?: LinkType;
};

const Toast = ({ isLinked, message, linkTo }: ToastProps) => {
  return createPortal(
    <section className={styles.wrapper_toast}>
      <div className={styles.toast}>
        {TOAST_MESSAGE[message]}
        {isLinked && (
          <Link to={TOAST_LINK[linkTo!]}>
            <span className={styles.txt_link}>목록보기</span>
          </Link>
        )}
      </div>
    </section>,
    document.getElementById('toast') as HTMLElement,
  );
};

export default Toast;
