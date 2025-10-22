import styles from './ButtonAction.module.css';

export function ButtonAction(props) {
  const { label } = props;

  return <button className={styles.buttonAction}>{label}</button>;
}
