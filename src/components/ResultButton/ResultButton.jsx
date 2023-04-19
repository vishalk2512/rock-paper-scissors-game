import styles from "./ResultButton.module.css";
import { paper, scissors, rock } from "../../assets";

const ResultButton = ({ type }) => {
  return (
    <button className={`${styles.btn} ${styles[`btn--${type}`]}`}>
      <div className={styles.btn__iconContainer}>
        <img className={styles.btn__icon} src={eval(type)} alt={`${type}`} />
      </div>
    </button>
  );
};

export default ResultButton;
