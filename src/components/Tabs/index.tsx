import clsx from 'clsx';
import { useState } from 'react';

import { Tab } from 'types/tab';

import styles from './index.module.scss';

type TabProps = {
  initialTabId: Tab['id'];
  tabs: Tab[];
  mode: string;
};

const Tabs = ({ initialTabId = 0, tabs, mode }: TabProps) => {
  const [currentTabId, setCurrentTabId] = useState<Tab['id']>(initialTabId);

  return (
    <>
      <ul className={clsx(styles.wrapper_list, styles[mode])}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setCurrentTabId(tab.id)}
          >
            <li
              value={tab.name}
              className={clsx(styles.wrapper_tab, {
                [styles.on]: currentTabId === tab.id,
              })}
            >
              <span className={styles.txt_name}>{tab.name}</span>
              {tab.description && (
                <span className={styles.txt_description}>
                  {tab.description}
                </span>
              )}
            </li>
          </button>
        ))}
      </ul>
      {tabs[currentTabId].content}
    </>
  );
};

export default Tabs;
