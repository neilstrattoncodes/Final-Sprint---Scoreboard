import React from "react";
import { useState } from "react";
import styles from "../styles/cornhole.module.css";

export default function PlayerScores() {
  const [p1total, setP1total] = useState(0); // for total P1 score
  const [p2total, setP2total] = useState(0); // for total P2 score
  const [p1score, setP1Score] = useState(0); // P1 round score
  const [p2score, setP2Score] = useState(0); // P2 round score
  const [p1name, setP1Name] = useState("Enter Player 1's Name"); // Player 1 name
  const [p2name, setP2Name] = useState("Enter Player 2's Name"); // Player 2 name

  const ScoreReset = () => {
    //Reset score
    setP1total(0);
    setP2total(0);
  };

  const roundEnd = (e) => {
    //Round end and compare score
    e.preventDefault();
    if (p1score > p2score) {
      let score = p1score - p2score;
      setP1total(p1total + score);
    } else if (p2score > p1score) {
      let score = p2score - p1score;
      setP2total(p2total + score);
    } else if (p1total >= 21) {
      alert("Game Over Player1 Wins!");
      ScoreReset();
    } else if (p2total >= 21) {
      alert("Game Over Player2 Wins!");
      ScoreReset();
    }

    setP1Score(0);
    setP2Score(0);
  };

  return (
    <div id={styles.background}>
      <div id={styles.scoreboard}>Cornhole Scoreboard</div>

      <div id={styles.p1total}>
        {p1name}'s' total score is {p1total} points
      </div>
      <div id={styles.p2total}>
        {p2name}'s' total score is {p2total} points
      </div>

      <div id={styles.p1round}>round score is {p1score} points</div>

      <div id={styles.p2round}>round score is {p2score} points</div>

      <form onSubmit={roundEnd}>
        <input
          id={styles.p1score} //P1 round score
          type="number"
          value={p1score}
          max="8"
          min="0"
          step="1"
          placeholder="enter {p1score} score"
          onChange={(e) => setP1Score(e.target.value)}
        />
        <br></br>
        <input
          id={styles.p2score} //P2 round score
          type="number"
          value={p2score}
          placeholder="enter {p2score} score"
          max="8"
          min="0"
          step="1"
          onChange={(e) => setP2Score(e.target.value)}
        />
        <button id={styles.roundover} type="submit">
          Round Submit
        </button>
      </form>
      <br></br>
      <input
        id={styles.p1name} //P1 name enter
        type="text"
        placeholder="enter Player1 Name"
        onChange={(e) => setP1Name(e.target.value)}
      />
      <br></br>
      <input
        id={styles.p2name} //p2 name enter
        type="text"
        placeholder="enter Player2 Name"
        onChange={(e) => setP2Name(e.target.value)}
      />
      <br></br>
      <button id={styles.reset} onClick={() => ScoreReset()}>
        Reset Score
      </button>
    </div>
  );
}
