import styles from './index.module.scss';

// TODO : 필요 데이터
const data = {
  src: 'https://img1.kakaocdn.net/thumb/C86x86@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20231120093525_68d33ddb2c0e426786589e6d47319a7d.jpg',
  brandName: '탬버린즈',
  title: '"NEW 펌키니" [단독/선물포장] 미니 퍼퓸 핸드크림',
  option: '옵션[NEW] PUMKINI #크리미 #제니PICK #카카오단독 | THANK YOU',
};

const PaymentItem = () => {
  return (
    <section className={styles.wrapper_item}>
      <img
        src={data.src}
        alt={`${data.title}상품이미지`}
        className={styles.thumb_item}
      />
      <div>
        <p className={styles.txt_brand}>{data.brandName}</p>
        <p className={styles.txt_title}>{data.title}</p>
        {data.option && (
          <p className={styles.txt_option}>
            <span className={styles.ico_option} />
            {data.option}
          </p>
        )}
      </div>
    </section>
  );
};

export default PaymentItem;
