import clsx from 'clsx';
import { useState } from 'react';

import { Tab } from 'types/tab';

import styles from './index.module.scss';

type TabProps = {
  initialTabId: Tab['id'];
  tabs: Tab[];
};

const Tabs = ({ initialTabId = 0, tabs }: TabProps) => {
  const [currentTabId, setCurrentTabId] = useState<Tab['id']>(initialTabId);

  return (
    <>
      <ul className={styles.wrapper_list}>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            value={tab.name}
            className={clsx(styles.wrapper_tab, {
              [styles.on]: currentTabId === tab.id,
            })}
          >
            <button type="button" onClick={() => setCurrentTabId(tab.id)}>
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
      {tabs[currentTabId].content}
    </>
  );
};

export default Tabs;
