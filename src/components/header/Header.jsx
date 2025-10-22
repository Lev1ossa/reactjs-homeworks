import { AppLogo } from '../app-logo/AppLogo';
import styles from './Header.module.css';
import { CartButton } from './cart-button/CartButton';
import { HeaderTabs } from './header-tabs/HeaderTabs';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <AppLogo />
        <div className={styles.headerNavContainer}>
          <HeaderTabs />
          <CartButton />
        </div>
      </div>
    </div>
  );
}
