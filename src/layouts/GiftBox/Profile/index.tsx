import styles from './index.module.scss';

const mockdata = {
  imgUrl:
    'https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png',
  userName: '보경',
  month: 5,
  day: 7,
};
const Profile = () => {
  // <ProfileImg size='xl' />
  return (
    <section className={styles.wrapper_profile}>
      <img alt="프로필" src={mockdata.imgUrl} className={styles.img} />
      <div className={styles.txt_name}>
        {mockdata.userName}
        <div
          className={styles.txt_brith}
        >{`내 생일은 ${mockdata.month}월 ${mockdata.day}일`}</div>
      </div>
    </section>
  );
};

export default Profile;
