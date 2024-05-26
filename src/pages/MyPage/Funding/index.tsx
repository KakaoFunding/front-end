import EmptyItem from 'components/feature/EmptyItem';
import FundingItem from 'layouts/MyPage/Funding/FundingItem';

import { useUserStore } from 'store/useUserStore';

import styles from './index.module.scss';

// 목데이터
const data = {
  hasFunding: true,
  userName: '보경',
  fundingId: 1,
  imgUrl:
    'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240412000831_223be6cfd2eb40e3bbaf238fca8a56e9',
  fundingItemName: '참이 포함된 트레이드마크 체인 팔찌',
  fundingItemProductId: 9632965,
  fundingItemBrandName: '구찌',
  fundingItemBrandThumbnail:
    'https://img1.kakaocdn.net/thumb/C200x200@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20240402164826_a474afeeff5e42d9bfd4d64025303e32.png',
  fundingPrice: 600000,
  brandId: 11481,
};

const Funding = () => {
  const { name } = useUserStore();

  return (
    <>
      <div className={styles.title}>{`${name}님의 \n펀딩아이템`}</div>
      {data.hasFunding ? (
        <FundingItem
          fundingId={data.fundingId}
          imgUrl={data.imgUrl}
          price={data.fundingPrice}
          productName={data.fundingItemName}
          productId={data.fundingItemProductId}
          brandName={data.fundingItemBrandName}
          brandThumbnail={data.fundingItemBrandThumbnail}
          brandId={data.brandId}
        />
      ) : (
        <EmptyItem type="funding" />
      )}
      <div>펀딩 아이템 추천 영역</div>
    </>
  );
};

export default Funding;
