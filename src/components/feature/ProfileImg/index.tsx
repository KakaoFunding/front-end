import clsx from 'clsx';

import styles from './index.module.scss';

type ProfileImgProps = {
  size: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  cursor?: boolean;
  hasIcon?: 'plus' | 'cancel' | 'me';
  imgUrl?: string;
  onClick?: () => void;
};

const defaultProfileImg = 'src/assets/profile_default.png';

const ProfileImg = ({
  size,
  cursor,
  hasIcon,
  onClick,
  imgUrl,
}: ProfileImgProps) => {
  return (
    <button
      type="button"
      onClick={onClick || undefined}
      aria-label="text"
      className={clsx(styles.btn, { [styles.on]: cursor || hasIcon })}
    >
      <img
        src={imgUrl || defaultProfileImg}
        alt="프로필 사진"
        className={clsx(styles.img, styles[size])}
      />

      <div
        className={clsx(
          styles.ico_profile,
          styles[size],
          hasIcon && styles[hasIcon],
        )}
      />
    </button>
  );
};

export default ProfileImg;
