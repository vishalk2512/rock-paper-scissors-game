import { ResultButton } from "../";
import styles from "./ResultBoard.module.css";

const ResultBoard = ({ userChoice, setUserChoice, computerChoice, result }) => {
  return (
    <div className={styles.resultboard}>
      <div className={styles.resultboard__pickedUser}>
        <ResultButton type={userChoice} />
        <span className={styles.resultboard__pickedText}>you picked</span>
      </div>
      <div className={styles.resultboard__pickedComputer}>
        <ResultButton type={computerChoice} />
        <span className={styles.resultboard__pickedText}>computer picked</span>
      </div>
      <div className={styles.resultboard__resultContainer}>
        <h2 className={styles.resultboard__resultText}>{result}</h2>
        <button
          className={styles.resultboard__btn}
          onClick={() => setUserChoice("")}
        >
          play again
        </button>
      </div>
    </div>
  );
};

export default ResultBoard;
