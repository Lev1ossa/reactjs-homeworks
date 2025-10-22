import styles from './FooterLink.module.css';

export function FooterLink(props) {
  const { label, heading } = props;

  return <p className={heading ? styles.footerLinkHeading : styles.footerLink}>{label}</p>;
}
