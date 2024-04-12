import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Thumbnail from 'components/feature/ProductItem/Thumbnail';
import { Button } from 'components/ui/Button';

import { formatNumberWithComma, formatNumberToPercent } from 'utils/format';

import styles from './index.module.scss';

const data = {
  thumbnail:
    'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240318095141_80a46f7dfcee4aecae72311ac9c52e7d.jpg',
  brand: '스타벅스',
  name: '스타벅스 딸기 라떼 T + 피스타치오 핑크 롤',
  productId: 9467308,
  productPrice: 1000000,
  fundingPrice: 98000,
};

const WHITE_SPACE = `\u00A0`;

const FriendsFunding = () => {
  const handleFunding = () => {};
  return (
    <>
      <strong className={styles.title_funding}>친구의 펀딩 아이템</strong>
      <section className={styles.area_funding}>
        <Thumbnail
          src={data.thumbnail}
          size="medium"
          alt={`${'친구이름'}가 선택한 펀딩 아이템 썸네일`}
        />
        <section className={styles.wrapper_funding}>
          <div className={styles.wrapper_title}>
            <p className={styles.txt_brand}>{data.brand}</p>
            <p className={styles.txt_name}>{data.name}</p>
          </div>
          <div className={styles.wrapper_info}>
            <div className={styles.txt_info}>
              <p className={styles.txt_default}>
                목표 달성까지
                <span
                  className={styles.txt_point}
                >{`${WHITE_SPACE}${formatNumberWithComma(data.productPrice - data.fundingPrice)}`}</span>
                원 남았어요
              </p>
              <p className={styles.txt_default}>
                완료까지
                <strong className={clsx(styles.txt_point, styles.txt_percent)}>
                  {`${WHITE_SPACE}${formatNumberToPercent(data.fundingPrice, data.productPrice)}`}
                </strong>
              </p>
            </div>
            {/* TODO : 프로그레스바 삽입 예정 */}
            <div style={{ backgroundColor: `blue`, margin: '20px 0' }}>
              프로그레스바
            </div>
            {/* TODO : 결제페이지 props에 맞게 필요한 데이터 전달 */}
            <Link to="/bill" state={{ productId: data.productId, self: false }}>
              <Button color="yellow" className={styles.btn_funding}>
                펀딩하기
              </Button>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default FriendsFunding;
