import styles from "./Score.module.css";
import { logo } from "../../assets";

const Score = ({ score }) => {
  return (
    <div className={styles.header}>
      <img
        src={logo}
        alt="rock paper scissors"
        className={styles.header__logo}
      />
      <div className={styles.header__score}>
        <span className={styles.score__title}>score</span>
        <h1 className={styles.score__points}>{score}</h1>
      </div>
    </div>
  );
};

export default Score;
