import { useQuery } from '@tanstack/react-query';

import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import Thumbnail from 'components/feature/ProductItem/Thumbnail';
import { Button } from 'components/ui/Button';
import ProgressBar from 'components/ui/ProgressBar';
import Spinner from 'components/ui/Spinner';

import { getFriendFundingItem } from 'services/api/v1/funding';
import { isEmptyObject } from 'utils/validate';

import styles from './index.module.scss';

const WHITE_SPACE = `\u00A0`;

type FriendFundingProps = {
  friendId: string;
};

const FriendFunding = ({ friendId }: FriendFundingProps) => {
  const {
    data: fundingItem,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: ['friendFunding', friendId],
    queryFn: () => getFriendFundingItem(friendId),
  });

  const navigate = useNavigate();

  const handleAddFunding = (fundingId: number) => {
    navigate('/bill/funding', { state: { fundingId } });
  };

  return (
    <>
      {isFetched && fundingItem && !isEmptyObject(fundingItem) ? (
        <>
          <strong className={styles.title_funding}>친구의 펀딩 아이템</strong>
          <section className={styles.area_funding}>
            <Thumbnail
              src={fundingItem.productPhoto}
              size="medium"
              alt={`${'친구이름'}가 선택한 펀딩 아이템 썸네일`}
            />
            <section className={styles.wrapper_funding}>
              <div className={styles.wrapper_title}>
                <p className={styles.txt_brand}>{fundingItem.brandName}</p>
                <p className={styles.txt_name}>{fundingItem.productName}</p>
              </div>
              <div className={styles.wrapper_info}>
                <div className={styles.txt_info}>
                  <p className={styles.txt_default}>
                    목표 달성까지
                    <span
                      className={styles.txt_point}
                    >{`${WHITE_SPACE}${fundingItem.remainAmount}`}</span>
                    원 남았어요
                  </p>
                  <p className={styles.txt_default}>
                    완료까지
                    <strong
                      className={clsx(styles.txt_point, styles.txt_percent)}
                    >
                      {`${WHITE_SPACE}${fundingItem.progressRate.toFixed(1)}%`}
                    </strong>
                  </p>
                </div>
                <ProgressBar
                  denominator={fundingItem.goalAmount}
                  numerator={fundingItem.accumulateAmount}
                />
                <Button
                  color="yellow"
                  className={styles.btn_funding}
                  onClick={() => handleAddFunding(fundingItem.fundingId)}
                >
                  펀딩하기
                </Button>
              </div>
            </section>
          </section>
        </>
      ) : null}
      {isLoading && <Spinner />}
    </>
  );
};

export default FriendFunding;
