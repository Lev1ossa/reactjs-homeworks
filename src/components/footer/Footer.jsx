import instaIcon from '../../assets/icons/insta-icon.svg';
import twitterIcon from '../../assets/icons/twitter-icon.svg';
import youtubeIcon from '../../assets/icons/youtube-icon.svg';
import { AppLogo } from '../app-logo/AppLogo';
import { FooterLinksList } from './footer-links-list/FooterLinksList';
import styles from './Footer.module.css';

const footerLinksData = [
  ['COMPANY', 'Home', 'Order', 'FAQ', 'Contact'],
  ['TEMPLATE', 'Style Guide', 'Changelog', 'Licence', 'Webflow University'],
  ['FLOWBASE', 'More Cloneables']
];

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.footerInfo}>
          <div className={styles.footerInfoTextContainer}>
            <div className={styles.footerAppLogoContainer}>
              <AppLogo />
            </div>
            <div className={styles.footerTextContainer}>
              <p className={styles.footerText}>Takeaway & Delivery template</p>
              <p className={styles.footerText}>for small - medium businesses.</p>
            </div>
          </div>
          <div className={styles.footerLinks}>
            {footerLinksData.map((item, idx) => (
              <FooterLinksList key={idx} linksList={item} />
            ))}
          </div>
        </div>
        <div className={styles.footerContacts}>
          <div className={styles.footerCreator}>
            <p className={styles.footerCreatorText}>Built by</p>
            <p className={`${styles.footerCreatorText} ${styles.highlighted}`}>Flowbase</p>
            <p className={styles.footerCreatorText}>· Powered by</p>
            <p className={`${styles.footerCreatorText} ${styles.highlighted} ${styles.ml}`}>Webflow</p>
          </div>
          <div className={styles.footerSocials}>
            <img className={styles.socialIcon} src={instaIcon}></img>
            <img className={styles.socialIcon} src={twitterIcon}></img>
            <img className={styles.socialIcon} src={youtubeIcon}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
