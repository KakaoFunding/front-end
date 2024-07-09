import ProfileImg from 'components/feature/ProfileImg';

import { useUserStore } from 'store/useUserStore';

import { formatBirthDate } from 'utils/format';

import styles from './index.module.scss';

const Profile = () => {
  const { name, profileUrl, birthDate } = useUserStore();
  const { month, day } = formatBirthDate(birthDate ?? '2000-01-01');

  return (
    <section className={styles.wrapper_profile}>
      <ProfileImg size="xl" imgUrl={profileUrl!} />
      <div className={styles.txt_name}>
        {name}
        <div
          className={styles.txt_birth}
        >{`내 생일은 ${month}월 ${day}일`}</div>
      </div>
    </section>
  );
};

export default Profile;
