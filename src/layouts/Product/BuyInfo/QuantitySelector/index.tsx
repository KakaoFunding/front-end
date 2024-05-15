import clsx from 'clsx';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';

import { isValidQuantity } from 'utils/validation';

import styles from './index.module.scss';

type QuantitySelectorProps = {
  hasOption: boolean;
  optionName: string;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  handleOptionClear?: () => void;
};

const QuantitySelector = ({
  hasOption,
  optionName,
  quantity,
  setQuantity,
  handleOptionClear,
}: QuantitySelectorProps) => {
  const [input, setInput] = useState<string>('1');

  useEffect(() => {
    setInput(quantity.toString());
  }, [quantity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const handleBlur = () => {
    if (isValidQuantity(input)) {
      const newQuantity = Number(input);
      setQuantity(newQuantity);
      setInput(newQuantity.toString());
      return;
    }
    setInput('1');
  };

  // TODO : 상품 최대 주문값, 최소 주문값을 상수로 분리하여 예외 처리하기
  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };
  // TODO : 상품 최대 주문값, 최소 주문값을 상수로 분리하여 예외 처리하기
  const handleMinusClick = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  // TODO : button > span 스토리북으로 컴포넌트화 하기
  return (
    <section className={clsx({ [styles.area_quantity]: !hasOption })}>
      <div className={styles.wrapper_option}>
        {optionName}
        {hasOption && (
          <button
            type="button"
            onClick={handleOptionClear}
            aria-label="toggle button"
          >
            <span className={styles.ico_toggle} />
          </button>
        )}
      </div>
      <div className={styles.wrapper_quantity}>
        <button
          type="button"
          aria-label="minus button"
          onClick={handleMinusClick}
          className={styles.ico_quantity}
        >
          <span className={styles.ico_minus} />
        </button>
        <input
          value={input}
          className={styles.input_option}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button
          type="button"
          aria-label="plus button"
          onClick={handlePlusClick}
          className={styles.ico_quantity}
        >
          <span className={styles.ico_plus} />
        </button>
      </div>
    </section>
  );
};

export default QuantitySelector;
