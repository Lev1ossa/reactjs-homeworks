import foodImage from '../../assets/images/home-page-food.png';
import trustPilotImage from '../../assets/images/trustpilot-logo.png';
import { ButtonAction } from '../../components/button-action/ButtonAction';

import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.homePage}>
        <div className={styles.homePageInfo}>
          <div className={styles.homePageTitleContainer}>
            <h1 className={styles.homePageTitle}>
              Beautiful food & takeaway, <span className={styles.textHighlighted}>delivered</span> to your door.
            </h1>
            <h2 className={styles.homePageSubtitle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500.
            </h2>
          </div>
          <div className={styles.homePageOrderContainer}>
            <div className={styles.mainPageButtonActionContainer}>
              <ButtonAction label={'Place an Order'} />
            </div>
            <div className={styles.homePageTrustPilotContainer}>
              <img className={styles.trustPilotImg} src={trustPilotImage} />
              <p>
                <span className={styles.textHighlighted}>4.8 out of 5</span> based on 2000+ reviews
              </p>
            </div>
          </div>
        </div>
        <div className={styles.foodImageContainer}>
          <img src={foodImage} />
        </div>
      </div>
    </div>
  );
}
