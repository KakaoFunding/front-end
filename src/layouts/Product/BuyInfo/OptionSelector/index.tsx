import clsx from 'clsx';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';

import { Option } from 'types/product';

import styles from './index.module.scss';

type ProductOptionProps = {
  optionTitle: string;
  options: Option[];
  selectedOption: Option | false;
  setSelectedOption: Dispatch<SetStateAction<Option | false>>;
};

const ProductOption = ({
  optionTitle,
  options,
  selectedOption,
  setSelectedOption,
}: ProductOptionProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  useEffect(() => {
    if (selectedOption) {
      setIsToggled(true);
    } else {
      setIsToggled(false);
    }
  }, [selectedOption]);

  const handleToggle = () => selectedOption && setIsToggled(!isToggled);

  const handleOptionChange = (option: Option) => setSelectedOption(option);

  return (
    <section>
      <div className={clsx(styles.default, styles.txt_notice)}>
        선물 받은 친구가 직접 옵션 변경 가능하니 안심하세요!
      </div>
      <div className={clsx(styles.default, styles.txt_option)}>
        {selectedOption ? selectedOption.name : optionTitle}
        <button type="button" onClick={handleToggle} aria-label="toggle button">
          <span
            className={clsx(styles.ico_toggle, { [styles.on]: isToggled })}
          />
        </button>
      </div>
      <ul className={clsx({ [styles.wrapper_option]: isToggled })}>
        {options.map((option) => (
          <li key={option.id} className={styles.default}>
            {option.name}
            <input
              type="radio"
              name="option"
              checked={selectedOption && selectedOption.id === option.id}
              onChange={() => handleOptionChange(option)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductOption;
