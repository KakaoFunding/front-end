import { Link } from 'react-router-dom';

import Thumbnail from 'components/feature/ProductItem/Thumbnail';
import { Button } from 'components/ui/Button';

import { formatNumberWithUnit } from 'utils/format';

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
  const handleFundingClick = () => {};
  const handleCancelFundingClick = () => {};
  return (
    <section className={styles.area_funding_item}>
      <Link to={`/product/${productId}`}>
        {/* 이미지 size 변경 예정  260x260 */}
        <Thumbnail
          size="medium"
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
          <Button
            color="black"
            onClick={handleCancelFundingClick}
            className={styles.btn_default}
          >
            펀딩취소하기
          </Button>
          <Button
            color="yellow"
            onClick={handleFundingClick}
            className={styles.btn_default}
          >
            펀딩하기
          </Button>
        </div>
      </section>
    </section>
  );
};

export default FundingItem;
