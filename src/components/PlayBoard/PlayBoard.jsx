import styles from "./PlayBoard.module.css";
import { PlayButton } from "../";

const playButtons = ["paper", "scissors", "rock"];

const PlayBoard = ({ userPick }) => {
  return (
    <div className={styles.playboard}>
      <div className={styles.playboard__tringle}>
        {playButtons.map((playButton, index) => {
          return (
            <PlayButton type={playButton} key={index} userPick={userPick} />
          );
        })}
      </div>
    </div>
  );
};

export default PlayBoard;
