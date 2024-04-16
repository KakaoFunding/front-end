import FundingRanking from 'layouts/MyPage/Funding/FundingRanking';

import styles from './index.module.scss';

const mockdata = {
  userName: '보경',
};
const Funding = () => {
  return (
    <>
      <div className={styles.title}>
        {`${mockdata.userName}님의 \n펀딩아이템`}
      </div>

      <div>펀딩영역</div>
      <FundingRanking />
      <div>펀딩 아이템 추천 영역</div>
    </>
  );
};

export default Funding;
