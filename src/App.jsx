import React, { useEffect, useState } from "react";
import "./App.css";
import { PlayBoard, ResultBoard, Rules, Score } from "./components";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("score");
    return savedScore ? Number(savedScore) : 0;
  });

  function showResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      setResult("draw");
    }

    if (
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "rock" && computerChoice === "scissors")
    ) {
      setResult("you win");
      setScore((prevScore) => prevScore + 1);
    }

    if (
      (userChoice === "paper" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "rock") ||
      (userChoice === "rock" && computerChoice === "paper")
    ) {
      setResult("you lose");
      setScore((prevScore) => prevScore - 1);
    }
  }

  useEffect(() => {
    showResult(userChoice, computerChoice);
  }, [userChoice, computerChoice]);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  function userPick(e) {
    setUserChoice(e.currentTarget.id);
    computerPick();
  }

  function computerPick() {
    const items = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    setComputerChoice(items[randomNumber]);
  }
  return (
    <div className="app">
      <Score score={score} />
      {!userChoice && <PlayBoard userPick={userPick} />}
      {userChoice && (
        <ResultBoard
          userChoice={userChoice}
          setUserChoice={setUserChoice}
          computerChoice={computerChoice}
          result={result}
        />
      )}
      <Rules />
    </div>
  );
}

export default App;
