import { useEffect, useState } from 'react';

import ProductOption from './OptionSelector/ProductOption';
import ProductQuantity from './QuantitySelector/ProductQuantity';

import styles from './index.module.scss';

// TODO : 받아올 데이터
const mockData = {
  isOption: true,
  productTitle: '940 코쿤 [New & Limited]',
  optionTitle: '색상',
  options: [
    {
      id: 1,
      name: '940 코쿤 [New & Limited]',
    },
    {
      id: 2,
      name: '934 코랄린 [New & Limited]',
    },
    {
      id: 3,
      name: '932 아네모네 [New & Limited]',
    },
    {
      id: 4,
      name: '918 마이 로즈',
    },
    {
      id: 5,
      name: '916 플러티 코랄',
    },
    {
      id: 6,
      name: '920 인 러브',
    },
    {
      id: 7,
      name: '912 드리미 화이트',
    },
    {
      id: 8,
      name: '914 내츄럴 잠',
    },
    {
      id: 9,
      name: '922 패션 핑크',
    },
    {
      id: 10,
      name: '924 폴 포 미',
    },
    {
      id: 11,
      name: '928 핑크 딜라이트',
    },
    {
      id: 12,
      name: '930 스윗 트릿',
    },
    {
      id: 13,
      name: '936 칠링 핑크 [New]',
    },
    {
      id: 14,
      name: '938 킵 쿨 [New]',
    },
  ],
};

type Option = {
  id: number;
  name: string;
};

// 수량 + 가격 계산 컴포넌트
const BuyInfo = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<Option | false>(false);
  const [optionName, setOptionName] = useState<string>(mockData.optionTitle);

  useEffect(() => {
    if (selectedOption) {
      setOptionName(selectedOption.name);
    } else {
      setOptionName(mockData.optionTitle);
    }
  }, [selectedOption]);

  const handleOptionClear = () => setSelectedOption(false);

  return (
    <section className={styles.area_buy_info}>
      {mockData.isOption && (
        <ProductOption
          optionTitle={mockData.optionTitle}
          options={mockData.options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      )}
      {(!mockData.isOption || selectedOption) && (
        <ProductQuantity
          hasOption={Boolean(selectedOption)}
          optionName={optionName}
          handleOptionClear={handleOptionClear}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}
      {/* 계산 컴포넌트 */}
    </section>
  );
};

export default BuyInfo;
