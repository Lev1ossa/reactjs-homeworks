import styles from './HeaderTab.module.css';

export function HeaderTab(props) {
  const { label, active, onTabClick } = props;

  return (
    <li className={`${styles.headerTab} ${active ? styles.active : ''}`} onClick={onTabClick}>
      {label}
    </li>
  );
}
