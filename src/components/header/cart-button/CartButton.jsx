import cartIcon from '../../../assets/icons/cart-button.svg';
import styles from './CartButton.module.css';

export function CartButton() {
  return (
    <div className={styles.cartButtonContainer}>
      <img className={styles.cartButtonImage} src={cartIcon} />
      <span className={styles.cartButtonCounter}>0</span>
    </div>
  );
}
