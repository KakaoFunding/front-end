import { useEffect } from 'react';
import Slider from 'react-slick';

import SliderArrowButton from 'components/ui/SliderArrowButton';

import { useAxios } from 'hooks/useAxios';

import { FriendWishItemType } from 'types/wish';

import FriendWishItem from './FriendWishItem';

import styles from './index.module.scss';

type FriendWishProps = {
  friendId: string;
  socialAccessToken: string;
};

const FriendWish = ({ friendId, socialAccessToken }: FriendWishProps) => {
  const { data: wishlist, sendRequest } = useAxios<FriendWishItemType[]>({
    method: 'get',
    url: '/wishes/friends',
    data: {
      friendsProviderId: friendId,
      kakaoAccessToken: socialAccessToken,
    },
  });

  useEffect(() => {
    sendRequest();
  }, []);

  if (!wishlist || wishlist.length === 0) return null;

  const SLIDE_DISPLAY_COUNT = wishlist.length === 1 ? 1 : 2;
  const SLIDE_DRAGGABLE = wishlist.length > 2;

  return (
    <>
      <strong className={styles.title_wish}>친구의 위시리스트</strong>
      <Slider
        arrows={wishlist.length > SLIDE_DISPLAY_COUNT}
        draggable={SLIDE_DRAGGABLE}
        slidesToShow={SLIDE_DISPLAY_COUNT}
        prevArrow={<SliderArrowButton arrowType="prev" />}
        nextArrow={<SliderArrowButton arrowType="next" />}
        infinite={false}
        speed={300}
        className={styles.wrapper_wish}
      >
        {wishlist.map(({ wishDetail, wished }) => (
          <li key={wishDetail.wishId}>
            <FriendWishItem item={wishDetail} wished={wished} />
          </li>
        ))}
      </Slider>
    </>
  );
};

export default FriendWish;
