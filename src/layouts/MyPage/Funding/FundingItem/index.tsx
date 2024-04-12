import { Link } from 'react-router-dom';

import { Button } from 'components/ui/Button';

import { useModal } from 'hooks/useModal';
import { formatNumberWithUnit } from 'utils/format';

import FundingCancelModal from './FundingCancelModal';

import styles from './index.module.scss';

// TODO : 펀딩 API 확인후 분리 예정
type FundingItemProps = {
  imgUrl: string;
  price: number;
  productName: string;
  productId: number;
  brandName: string;
  brandId: number;
  brandThumbnail: string;
};

const FundingItem = ({
  imgUrl,
  price,
  productName,
  productId,
  brandName,
  brandId,
  brandThumbnail,
}: FundingItemProps) => {
  const { open, isOpen, close, scrollPos } = useModal();

  return (
    <section className={styles.area_funding_item}>
      <FundingCancelModal isOpen={isOpen} close={close} scrollPos={scrollPos} />
      <Link to={`/product/${productId}`}>
        {/* TODO : Thumbnail 리팩토링시 교체 */}
        <img
          className={styles.img_product}
          src={imgUrl}
          alt={`${productName}상품이미지`}
        />
      </Link>
      <section className={styles.area_info}>
        <div className={styles.wrapper_info}>
          <Link to={`/product/${productId}`}>
            <p className={styles.txt_product}>{productName}</p>
            <Link to={`/brand/${brandId}`}>
              <div className={styles.wrapper_brand}>
                <span className={styles.txt_brand}>
                  <img
                    src={brandThumbnail}
                    alt={`${brandName}로고이미지`}
                    className={styles.img_brand}
                  />
                  {brandName}
                </span>
                <span className={styles.ico} />
              </div>
            </Link>
          </Link>
          <p className={styles.txt_price}>
            목표금액<span>{formatNumberWithUnit(price)}</span>
          </p>
        </div>
        <div className={styles.wrapper_button}>
          <Button color="black" onClick={open} className={styles.btn_default}>
            펀딩취소하기
          </Button>
          {/* TODO : 결제페이지 props에 맞게 필요한 데이터 전달 */}
          <Link to="/bill" state={{ productId, self: true }}>
            <Button color="yellow" className={styles.btn_default}>
              펀딩하기
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default FundingItem;
