import { useState } from "react";

import styles from "./Rules.module.css";
import { rules, close } from "../../assets";

const Rules = () => {
  const [showRules, setShowRules] = useState(null);

  return (
    <div className={styles.rules}>
      <button className={styles.rules__open} onClick={() => setShowRules(true)}>
        rules
      </button>
      <div className={`${styles.model__container} ${showRules && styles.show}`}>
        <div className={styles.model}>
          <h2 className={styles.model__title}>rules</h2>
          <img
            src={rules}
            alt="paper beats rock, rock beats scissors, scissors beats paper"
            className={styles.model__rules}
          />
          <button
            className={styles.model__close}
            onClick={() => setShowRules(false)}
          >
            <img src={close} alt="close rules popup model" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rules;
