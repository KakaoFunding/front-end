import { useNavigate } from 'react-router-dom';

import { Button } from 'components/ui/Button';
import FundingModal from 'components/ui/Modal/FundingModal';
import WishModal from 'components/ui/Modal/WishModal';

import { useLogin } from 'hooks/useLogin';
import { useModal } from 'hooks/useModal';
import { formatNumberWithPlus } from 'utils/format';

import { RequestOrderPreview } from 'types/payment';
import { OptionDetail, ProductDescriptionResponse } from 'types/product';

import styles from './index.module.scss';

const mockData = {
  wishCnt: 999999,
};

type ButtonBundlesProps = {
  productDescription: ProductDescriptionResponse;
  hasOption: boolean;
  selectedOption: OptionDetail | false;
  quantity: number;
};

const ButtonBundles = ({
  productDescription,
  hasOption,
  selectedOption,
  quantity,
}: ButtonBundlesProps) => {
  const { productId, name, price, productThumbnails, options } =
    productDescription;
  const navigate = useNavigate();
  const { isLoggedIn, login, confirmLogin } = useLogin();

  const {
    isOpen: isFundingOpen,
    open: openFundingModal,
    close: closeFundingModal,
    scrollPos: scrollFundingPos,
  } = useModal();

  const {
    isOpen: isWishOpen,
    open: openWishModal,
    close: closeWishModal,
    scrollPos: scrollWishPos,
  } = useModal();

  // 로그인 여부 확인
  const checkLoginBeforeAction = (action: () => void) => {
    if (isLoggedIn) action();
    else {
      const result = confirmLogin();
      if (result) login();
    }
  };

  // 옵션 선택 여부 확인
  const checkOptionBeforeAction = (action: () => void) => {
    if (hasOption && !selectedOption) {
      alert('옵션을 선택해주세요');
      return;
    }
    action();
  };

  // 펀딩 등록 버튼 핸들러
  const handleClickFunding = () => {
    checkLoginBeforeAction(() => {
      checkOptionBeforeAction(openFundingModal);
    });
  };

  // 위시 버튼 핸들러
  const handleClickWish = () => {
    checkLoginBeforeAction(openWishModal);
  };

  // 나에게 선물하기 버튼 핸들러
  const handleClickGiftForMe = () => {
    const orderInfos: RequestOrderPreview = [
      {
        productId,
        quantity,
        options: selectedOption
          ? [
              {
                id: options[0].optionsId,
                detailId: selectedOption.id,
              },
            ]
          : [],
      },
    ];
    checkLoginBeforeAction(() => {
      checkOptionBeforeAction(() => {
        navigate('/bill/gift', { state: { orderInfos } });
      });
    });
  };

  // 친구에게 선물하기 버튼 핸들러
  const handleClickGiftForFriend = () => {
    checkLoginBeforeAction(() => {
      // 친구를 선택하지 않은 경우 피커 오픈
      // 친구를 선택한 경우 선물 결제 페이지로 이동
    });
  };

  // 선물상자 담기 버튼 핸들러
  const handleClickCart = () => {
    // console.log('선물상자 담기');
  };

  return (
    <section className={styles.wrapper_bundle}>
      <FundingModal
        close={closeFundingModal}
        isOpen={isFundingOpen}
        scrollPos={scrollFundingPos}
        name={name}
        price={price}
        productId={productId}
        selectedOption={selectedOption}
        productThumbnail={productThumbnails[0]}
      />
      <WishModal
        close={closeWishModal}
        isOpen={isWishOpen}
        scrollPos={scrollWishPos}
        productId={productId}
      />
      {/* TODO : 로그인 되었을 때만 보이게 */}
      <Button
        color="yellow"
        onClick={handleClickFunding}
        className={styles.btn_funding}
      >
        <span className={styles.ico_funding} />
        펀딩 아이템으로 등록하기
      </Button>
      {/* TODO : 로그인 되었을 때만 보이게 */}
      <Button
        color="white"
        onClick={handleClickCart}
        className={styles.btn_cart}
      >
        <span className={styles.ico_cart} />
        선물상자 담기
      </Button>
      <section className={styles.wrapper_gift}>
        <Button className={styles.btn_wish} onClick={handleClickWish}>
          <span className={styles.ico_wish} />
          {formatNumberWithPlus(mockData.wishCnt, 100000)}
        </Button>
        <Button
          color="black"
          onClick={handleClickGiftForMe}
          className={styles.btn_gift}
        >
          나에게 선물하기
        </Button>
        <Button
          color="yellow"
          onClick={handleClickGiftForFriend}
          className={styles.btn_gift}
        >
          <span className={styles.img_profile}>
            {/* TODO : 로그인 되었을 때만 보이게 */}
            <span className={styles.ico_profile} />
          </span>
          선물하기
        </Button>
      </section>
    </section>
  );
};

export default ButtonBundles;
