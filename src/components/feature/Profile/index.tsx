import ProfileImg from 'components/feature/ProfileImg';

import styles from './index.module.scss';

const mockdata = {
  imgUrl:
    'https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png',
  userName: '보경',
  month: 5,
  day: 7,
};
const Profile = () => {
  return (
    <section className={styles.wrapper_profile}>
      <ProfileImg size="xl" imgUrl={mockdata.imgUrl} />
      <div className={styles.txt_name}>
        {mockdata.userName}
        <div
          className={styles.txt_birth}
        >{`내 생일은 ${mockdata.month}월 ${mockdata.day}일`}</div>
      </div>
    </section>
  );
};

export default Profile;
