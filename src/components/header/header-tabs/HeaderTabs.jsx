import { useState } from 'react';
import { HeaderTab } from './header-tab/HeaderTab';
import styles from './HeaderTabs.module.css';

const headerTabsList = ['Home', 'Menu', 'Company', 'Login'];

export function HeaderTabs() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <nav className={styles.headerNav}>
      <ul className={styles.headerTabs}>
        {headerTabsList.map((label, idx) => (
          <HeaderTab key={idx} label={label} active={currentTab === idx} onTabClick={() => setCurrentTab(idx)} />
        ))}
      </ul>
    </nav>
  );
}
