import { Button } from 'components/ui/Button';
import FundingModal from 'components/ui/Modal/FundingModal';
import WishModal from 'components/ui/Modal/WishModal';

import { useModal } from 'hooks/useModal';
import { formatNumberWithPlus } from 'utils/format';

import { OptionDetail, ProductDescriptionResponse } from 'types/product';

import styles from './index.module.scss';

const handleClickGiftForFriend = () => {
  // console.log('피커오픈');
};

const handleClickCart = () => {
  // console.log('선물상자 담기');
};

const handleClickGiftForMe = () => {
  // console.log('나에게 선물하기');
};

const mockData = {
  wishCnt: 999999,
};

type ButtonBundlesProps = {
  productDescription: ProductDescriptionResponse;
  hasOption: boolean;
  selectedOption: OptionDetail | false;
};

const ButtonBundles = ({
  productDescription,
  hasOption,
  selectedOption,
}: ButtonBundlesProps) => {
  const { productId, name, price, productThumbnails } = productDescription;

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

  const handleClickFunding = () => {
    if (hasOption && !selectedOption) {
      alert('옵션을 선택해주세요');
      return;
    }
    openFundingModal();
  };

  const handleClickWish = () => {
    if (hasOption && !selectedOption) {
      alert('옵션을 선택해주세요');
      return;
    }
    openWishModal();
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
        selectedOption={selectedOption}
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
