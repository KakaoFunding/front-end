import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { formatNumberWithUnit } from 'utils/format';

import { OptionDetail, ProductDescriptionResponse } from 'types/product';

import ButtonBundles from './ButtonBundles';
import OptionSelector from './OptionSelector';
import QuantitySelector from './QuantitySelector';

import styles from './index.module.scss';

type BuyInfoProps = {
  isVisibleSelector: boolean;
  productDescription: ProductDescriptionResponse;
};

const BuyInfo = ({ isVisibleSelector, productDescription }: BuyInfoProps) => {
  const [hasOption, setHasOption] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [optionName, setOptionName] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<OptionDetail | false>(
    false,
  );

  const { options, name, price } = productDescription;

  useEffect(() => {
    if (options.length === 0) {
      setOptionName(name);
      setHasOption(false);
    } else {
      setOptionName(options[0].name);
      setHasOption(options.length !== 0);
    }
  }, []);

  useEffect(() => {
    if (selectedOption) {
      setOptionName(selectedOption.name);
    } else {
      setOptionName(name);
    }
  }, [selectedOption]);

  const handleOptionClear = () => {
    setSelectedOption(false);

    setQuantity(1);
  };

  return (
    productDescription &&
    !isVisibleSelector && (
      <section className={styles.area_buy_info}>
        <section
          className={clsx(styles.area_selector, {
            [styles.area_selector]: true,
          })}
        >
          {hasOption && (
            <OptionSelector
              optionTitle={options[0].name}
              options={options[0].optionDetails}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          )}
          {(!hasOption || selectedOption) && (
            <QuantitySelector
              hasOption={hasOption}
              optionName={optionName}
              handleOptionClear={handleOptionClear}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          )}
        </section>
        <section className={styles.area_bundles}>
          <div className={styles.wrapper_price}>
            <strong className={styles.txt_total}>총 결제금액</strong>
            <strong className={styles.txt_price}>
              {formatNumberWithUnit(price * quantity)}
            </strong>
          </div>
          <ButtonBundles
            productDescription={productDescription}
            hasOption={hasOption}
            selectedOption={selectedOption}
            quantity={quantity}
          />
        </section>
      </section>
    )
  );
};

export default BuyInfo;
