import styles from "./PlayButton.module.css";
import { paper, scissors, rock } from "../../assets";

const imageMap = {
  paper: paper,
  scissors: scissors,
  rock: rock,
};

const PlayButton = ({ type, userPick }) => {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${type}`]}`}
      onClick={userPick}
      id={`${type}`}
    >
      <div className={styles.btn__iconContainer}>
        <img
          className={styles.btn__icon}
          src={imageMap[type]}
          alt={`${type}`}
        />
      </div>
    </button>
  );
};

export default PlayButton;
