import { useQuery } from '@tanstack/react-query';

import { useEffect, useState, useRef } from 'react';

import Spinner from 'components/ui/Spinner';

import { getThemaItems } from 'services/api/v1/thema';
import { getRandomNumber } from 'utils/generate';

import { ProductItem } from 'types/productItem';

import ThemaList from './ThemaList';

import styles from './index.module.scss';

const TITLE = [
  '전하고픈 마음 가득 담아',
  '센스 넘치는 선물',
  '이런 선물 어때요 ?',
  '남녀노소 모두 좋아하는 선물',
  '반짝반짝 빛나는 마음',
  '부담 없이 마음을 전해요',
  '말없이 응원하고 싶을 때🍀',
  '이런 선물도 좋을 것 같아요.',
  '귀여운 게 최고야',
  '달콤한 진심을 전하는 선물',
  '고마운 사람들에게 전해요🎁',
  '변치 않는 마음을 전해요',
  '지금 안 사면 손해입니다 🚨',
  '전하고픈 마음 가득 담아',
  '활용도 높은 집들이 선물',
  '마음을 전하는 빛나는 선물',
];

const CATEGORY_ID = [
  170, 171, 172, 176, 177, 178, 179, 181, 182, 184, 185, 188, 192, 194, 195,
  196, 202, 203, 204, 205,
];

const getRandomCategoryId = () => {
  const categoryIdx = getRandomNumber(0, CATEGORY_ID.length - 1);
  return CATEGORY_ID[categoryIdx];
};

const getRandomTitle = () => {
  const titleIdx = getRandomNumber(0, TITLE.length - 1);
  return TITLE[titleIdx];
};

const Thema = () => {
  const observingTarget = useRef<HTMLDivElement>(null);
  const [themaItems, setThemaItems] = useState<ProductItem[][]>([]);
  const [titles, setTitles] = useState<string[]>([]);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['themaItems'],
    queryFn: async () => {
      const categoryId = getRandomCategoryId();
      const pageNumber = getRandomNumber(0, 5);
      const response = await getThemaItems(pageNumber, categoryId);

      return response;
    },
  });

  const handleObserver: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      refetch();
    }
  };

  const observer = new IntersectionObserver(handleObserver, {
    threshold: 0.1,
  });

  useEffect(() => {
    if (observingTarget.current) {
      observer.observe(observingTarget.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleObserver]);

  useEffect(() => {
    if (data) {
      const newThemeItems = themaItems.concat();
      newThemeItems.push(data.items);
      setThemaItems(() => [...newThemeItems]);
      setTitles(() => [...titles, getRandomTitle()]);
    }
  }, [data]);

  return (
    <>
      {themaItems.map((items, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={idx}>
          <ThemaList themaItems={items} title={titles[idx]} />
        </li>
      ))}
      {isLoading && <Spinner />}
      {!isLoading && <div ref={observingTarget} className={styles.observer} />}
    </>
  );
};

export default Thema;
