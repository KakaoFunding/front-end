import Slider from 'react-slick';

import SliderArrowButton from 'components/ui/SliderArrowButton';

import { ProductItem } from 'types/productItem';

import FriendWishItems from './FriendWishItems';

import styles from './index.module.scss';

const items = [
  {
    productId: 7359376,
    photo:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20211217124737_5c87ae38718141e5bbdf66234a307dce.jpg',
    brandName: '설빙',
    name: '애플망고치즈설빙',
    price: 13900,
    wished: false,
    wishCount: 111000,
  },
  {
    productId: 4145000,
    photo:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220306183838_22eca2bc80bf4e21aa12417182430e9c.jpg',
    brandName: '앨리건트테이블',
    name: '[봄나들이 데이트 피크닉의 계절] 감성 피크닉매트 3종 택1 L사이즈 소풍 여행 캠핑',
    price: 48800,
    wished: false,
    wishCount: 0,
  },
  {
    productId: 3489649,
    photo:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20231214100216_0fb634c58283405f8a4999fb10eabf0e.jpg',
    brandName: '더자리',
    name: '"봄맞이 나들이" [1+1/총2개] 마이블랭킷 고밀도 극세사 밍크담요 2개 (100x75)',
    price: 10900,
    wished: false,
    wishCount: 0,
  },
  {
    productId: 6433982,
    photo:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20230503140650_fb43ca3ad8b9461e90bea6879558455f.jpg',
    brandName: '오덴세',
    name: '[카카오단독컬러] 레고트 루프 텀블러 400ml (3 colors)',
    price: 29000,
    wished: false,
    wishCount: 0,
  },
  {
    productId: 4920170,
    photo:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220607093750_addf83e9403b405f968748013bcf8031.jpg',
    brandName: '플랜룩스',
    name: '플랜룩스 모티북 각도조절 높이조절 독서대 태블릿거치대 북스탠드',
    price: 29900,
    wished: false,
    wishCount: 0,
  },
];

const SLIDE_DISPLAY_COUNT = 2;

const FriendWish = () => {
  return (
    <>
      <strong className={styles.title_wish}>친구의 위시리스트</strong>
      <Slider
        arrows={items.length > SLIDE_DISPLAY_COUNT}
        slidesToShow={SLIDE_DISPLAY_COUNT}
        prevArrow={<SliderArrowButton arrowType="prev" />}
        nextArrow={<SliderArrowButton arrowType="next" />}
        infinite={false}
        speed={300}
        className={styles.wrapper_wish}
      >
        {items.map((item: ProductItem) => (
          <li key={item.productId}>
            <FriendWishItems product={item} />
          </li>
        ))}
      </Slider>
    </>
  );
};

export default FriendWish;
