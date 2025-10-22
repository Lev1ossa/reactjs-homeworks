import { FooterLink } from './footer-link/FooterLink';
import styles from './FooterLinksList.module.css';

export function FooterLinksList(props) {
  const { linksList } = props;

  return (
    <div className={styles.footerLinksList}>
      {linksList.map((item, idx) => (
        <FooterLink key={idx} label={item} heading={idx === 0} />
      ))}
    </div>
  );
}
