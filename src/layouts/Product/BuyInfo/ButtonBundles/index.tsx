import { useQuery } from '@tanstack/react-query';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/ui/Button';
import FundingModal from 'components/ui/Modal/FundingModal';
import WishModal from 'components/ui/Modal/WishModal';

import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';

import { useAxios } from 'hooks/useAxios';
import { useKakaoPicker } from 'hooks/useKakaoPicker';
import { useLogin } from 'hooks/useLogin';
import { useModal } from 'hooks/useModal';
import { useDeleteWish } from 'hooks/useWish';
import { getMyFundingItem } from 'services/api/v1/funding';
import { formatNumberWithPlus } from 'utils/format';
import { isEmptyObject } from 'utils/validate';

import { RequestOrderPreview } from 'types/payment';
import { OptionDetail, ProductDescriptionResponse } from 'types/product';
import { ResponseWishAddOrDelete } from 'types/wish';

import DefaultProfileImage from 'assets/profile_noimg.png';

import styles from './index.module.scss';

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
  const {
    productId,
    name,
    price,
    productThumbnails,
    options,
    wishCount: wishCountProp,
    wish: isWishedProp,
  } = productDescription;
  const navigate = useNavigate();
  const { checkLoginBeforeAction } = useLogin();
  const { isSelected, isSelfSelected, selectedFriends, getImgUrl } =
    useSelectedFriendsStore();
  const { openKakaoPicker } = useKakaoPicker();

  const [wishCount, setWishCount] = useState<number>(wishCountProp);
  const [isWished, setIsWished] = useState<boolean>(isWishedProp);
  const { deleteWishData, deleteWish } = useDeleteWish(productId);

  const { data } = useQuery({
    queryKey: ['myFundingItem'],
    queryFn: () => getMyFundingItem(),
  });

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

  // 장바구니 등록 API
  const { sendRequest: addItemToCart } = useAxios<{
    cartId: number;
  }>({
    url: '/cart',
    method: 'post',
    data: {
      productId,
      itemCount: quantity,
      optionId: selectedOption ? options[0].optionsId : null,
      optionDetailId: selectedOption ? selectedOption.id : null,
    },
  });

  // 주문 정보
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
      if (!isEmptyObject(data!)) {
        alert('이미 등록된 펀딩 아이템이 있습니다.');
        return;
      }

      checkOptionBeforeAction(openFundingModal);
    });
  };

  // 위시 버튼 핸들러
  const handleClickWish = () => {
    checkLoginBeforeAction(() => {
      if (isWished) deleteWish();
      else openWishModal();
    });
  };

  // 위시 등록 완료 후 실행
  const handleWishAdded = (wishData: ResponseWishAddOrDelete) => {
    setIsWished(true);
    setWishCount(wishData.wishCount);
  };

  // 위시 취소 완료 후 실행
  useEffect(() => {
    if (deleteWishData) {
      setIsWished(false);
      setWishCount(deleteWishData.wishCount);
    }
  }, [deleteWishData]);

  // 나에게 선물하기 버튼 핸들러
  const handleClickGiftForMe = () => {
    checkLoginBeforeAction(() => {
      checkOptionBeforeAction(() => {
        navigate('/bill/gift', { state: { orderInfos, giftFor: 'me' } });
      });
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
    checkLoginBeforeAction(openKakaoPicker);
  };

  // 장바구니 등록 버튼 핸들러
  const handleAddCart = () => {
    checkLoginBeforeAction(() => {
      checkOptionBeforeAction(addItemToCart);
    });
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
        onWishAdded={handleWishAdded}
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
      <Button color="white" onClick={handleAddCart} className={styles.btn_cart}>
        <span className={styles.ico_cart} />
        선물상자 담기
      </Button>
      <section className={styles.wrapper_gift}>
        <Button className={styles.btn_wish} onClick={handleClickWish}>
          <span className={clsx(styles.ico_wish, { [styles.on]: isWished })} />
          {formatNumberWithPlus(wishCount, 100000)}
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
          <div className={styles.wrapper_profile} onClick={handleClickProfile}>
            <img
              src={getImgUrl(DefaultProfileImage)}
              alt="선물할 친구 프로필 사진"
              className={styles.img_profile}
            />
            <span className={styles.ico_profile} />
          </div>
          선물하기
        </Button>
      </section>
    </section>
  );
};

export default ButtonBundles;
