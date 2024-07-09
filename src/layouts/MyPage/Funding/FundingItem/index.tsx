import { Link, useNavigate } from 'react-router-dom';

import { Button } from 'components/ui/Button';
import FundingCancelModal from 'components/ui/Modal/FundingCancelModal';

import { useModal } from 'hooks/useModal';
import { formatNumberWithUnit } from 'utils/format';

import { MyInProgressFunding } from 'types/funding';

import styles from './index.module.scss';

type FundingItemProps = Pick<
  MyInProgressFunding,
  | 'fundingId'
  | 'productPhoto'
  | 'goalAmount'
  | 'productName'
  | 'productId'
  | 'brandName'
  | 'brandPhoto'
  | 'brandId'
>;

const FundingItem = ({
  fundingId,
  productPhoto,
  goalAmount,
  productName,
  productId,
  brandName,
  brandPhoto,
  brandId,
}: FundingItemProps) => {
  const { open, isOpen, close, scrollPos } = useModal();

  const navigate = useNavigate();

  const handleAddFunding = () => {
    navigate('/bill/funding', { state: { fundingId } });
  };

  return (
    <section className={styles.area_funding_item}>
      <FundingCancelModal
        fundingId={fundingId}
        isOpen={isOpen}
        close={close}
        scrollPos={scrollPos}
      />
      <Link to={`/product/${productId}`}>
        <div className={styles.wrapper_thumb}>
          <div className={styles.img_product}>
            <img src={productPhoto} alt={`${productName}상품이미지`} />
          </div>
        </div>
      </Link>
      <section className={styles.area_info}>
        <div className={styles.wrapper_info}>
          <Link to={`/product/${productId}`}>
            <p className={styles.txt_product}>{productName}</p>
          </Link>
          <Link to={`/brand/${brandId}`}>
            <div className={styles.wrapper_brand}>
              <span className={styles.txt_brand}>
                <img
                  src={brandPhoto}
                  alt={`${brandName}로고이미지`}
                  className={styles.img_brand}
                />

                {brandName}
              </span>
              <span className={styles.ico} />
            </div>
          </Link>
          <p className={styles.txt_price}>
            목표금액<span>{formatNumberWithUnit(goalAmount)}</span>
          </p>
        </div>
        <div className={styles.wrapper_button}>
          <Button color="black" onClick={open} className={styles.btn_default}>
            펀딩취소하기
          </Button>
          <Button
            color="yellow"
            className={styles.btn_default}
            onClick={handleAddFunding}
          >
            펀딩하기
          </Button>
        </div>
      </section>
    </section>
  );
};

export default FundingItem;
