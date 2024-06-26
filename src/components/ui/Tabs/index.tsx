import clsx from 'clsx';
import { useState } from 'react';

import { Tab } from 'types/tab';

import styles from './index.module.scss';

type TabProps = {
  initialTabId: Tab['id'];
  tabs: Tab[];
  mode: 'product_list' | 'product_detail' | 'funding_history' | 'received_box';
};

const Tabs = ({ initialTabId = 0, tabs, mode }: TabProps) => {
  const [currentTabId, setCurrentTabId] = useState<Tab['id']>(initialTabId);

  return (
    <>
      <ul className={clsx(styles.wrapper_list, styles[mode])}>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            value={tab.name}
            className={clsx(styles.wrapper_tab, {
              [styles.on]: currentTabId === tab.id,
            })}
          >
            <button
              type="button"
              onClick={() => setCurrentTabId(tab.id)}
              className={styles.button}
            >
              <span className={styles.txt_name}>{tab.name}</span>
              {tab.description && (
                <span className={styles.txt_description}>
                  {tab.description}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
      {tabs.map((tab) => (
        <section
          key={tab.id}
          className={clsx({ [styles.hidden]: currentTabId !== tab.id })}
        >
          {currentTabId === tab.id && tab.content}
        </section>
      ))}
    </>
  );
};

export default Tabs;
