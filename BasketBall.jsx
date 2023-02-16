import React from "react";
import { useState } from "react";
import styles from "../styles/basketball.module.css";

export default function BasketBallScores() {
  const [p1total, setP1total] = useState(0); // for total P1 score
  const [p2total, setP2total] = useState(0); // for total P2 score
  const [p1counter, setP1counter] = useState(0); // P1 shot counter
  const [p2counter, setP2counter] = useState(0); // P1 shot counter
  const [p1array, setP1Array] = useState([]); // P1 Array for previous scores
  const [p2array, setP2Array] = useState([]); // P2 Array for previous scores
  const [p1name, setP1Name] = useState("Enter Player 1's Name"); // Player 1 name set
  const [p2name, setP2Name] = useState("Enter Player 2's Name"); // Player 2 name set
  const [horse, setHorse] = useState(false); // choice for horse or regular game
  const [p1horsecount, setP1Horsecount] = useState(0); // counter Player 1 horse
  const [p2horsecount, setP2Horsecount] = useState(0); //counter Player 2 horse

  let scorep1h = ""; // string for word horse
  let scorep2h = "";

  var p1HorseScore = 0; //counter to add number for change
  var p2HorseScore = 0;

  const ScoreReset = () => {
    //score reset to 0
    setP1total(0);
    setP2total(0);
    setP1Array([]);
    setP2Array([]);
    setP1Horsecount(0);
    setP2Horsecount(0);
  };

  const ShowP1Array = p1array.map((scorep1h) => {
    // Player 1 array for shot scores
    return <li>{scorep1h}</li>;
  });

  const ShowP2Array = p2array.map((scorep2h) => {
    // Player 2 array for shot scores
    return <li>{scorep2h}</li>;
  });

  const P1scoreTotal = (e) => {
    e.preventDefault();
    const score = Number(p1counter);
    setP1total(Number(p1total) + Number(score));
    setP1counter(0);
  };

  const P2scoreTotal = (e) => {
    e.preventDefault();
    const score = Number(p2counter);
    setP2total(p2total + score);
    setP2counter(0);
  };

  const setP1Horse = (e) => {
    e.preventDefault();
    var score = p1HorseScore + p1horsecount;
    if (score === 1) {
      scorep1h = "H";
      setP1Array([...p1array, scorep1h]);
    } else if (score === 2) {
      scorep1h = "O";
      setP1Array([...p1array, scorep1h]);
    } else if (score === 3) {
      scorep1h = "R";
      setP1Array([...p1array, scorep1h]);
    } else if (score === 4) {
      scorep1h = "S";
      setP1Array([...p1array, scorep1h]);
    } else if (score === 5) {
      scorep1h = "E";
      setP1Array([...p1array, scorep1h]);
    } else if (score === 6) {
      alert("Game Over Player1 Wins");
      ScoreReset();
    }
  };

  const setP2Horse = (e) => {
    e.preventDefault();
    var score = p2HorseScore + p2horsecount;
    if (score === 1) {
      console.log(score);
      scorep2h = "H";
      setP2Array([...p2array, scorep2h]);
    } else if (score === 2) {
      scorep2h = "O";
      setP2Array([...p2array, scorep2h]);
    } else if (score === 3) {
      scorep2h = "R";
      setP2Array([...p2array, scorep2h]);
    } else if (score === 4) {
      scorep2h = "S";
      setP2Array([...p2array, scorep2h]);
    } else if (score === 5) {
      scorep2h = "E";
      setP2Array([...p2array, scorep2h]);
    } else if (score === 6) {
      alert("Game Over Player2 Wins");
      ScoreReset();
    }
  };

  return (
    <div id={styles.background}>
      <div id={styles.scoreboard}>Basketball Scoreboard</div>

      <input
        id={styles.p1name}
        type="text"
        placeholder="enter Player1 Name"
        onChange={(e) => setP1Name(e.target.value)}
      />
      <br></br>
      <input
        id={styles.p2name}
        type="text"
        placeholder="enter Player2 Name"
        onChange={(e) => setP2Name(e.target.value)}
      />

      <button id={styles.reset} onClick={() => ScoreReset()}>
        Reset Score
      </button>
      <button id={styles.gamemode} onClick={() => setHorse(!horse)}>
        {horse ? "Regular BBall" : "Play Horse"}
      </button>
      {horse ? (
        <h2>
          <div id={styles.p1horsescore}>
            {p1name} previous scores are : {ShowP1Array}
          </div>
          <div id={styles.p2horsescore}>
            {p2name} previous scores are : {ShowP2Array}
          </div>
          <input
            id={styles.p1hsubmit}
            type="button"
            value="P1 submit"
            onClick={(e) => {
              setP1Horse(e);
              setP1Horsecount(p1horsecount + 1);
            }}
          />

          <input
            id={styles.p2hsubmit}
            type="button"
            value="P2 submit"
            onClick={(e) => {
              setP2Horse(e);
              setP2Horsecount(p2horsecount + 1);
            }}
          />
        </h2>
      ) : (
        <div>
          <div id={styles.p1total}>
            {" "}
            {p1name} score is {p1total} points{" "}
          </div>

          <div id={styles.p2total}>
            {" "}
            {p2name} score is {p2total} points{" "}
          </div>

          <form onSubmit={P1scoreTotal}>
            <input
              id={styles.p1pts2}
              type="button"
              value="2PTS"
              onClick={(e) => setP1counter(2)}
            />
            <input
              id={styles.p1pts3}
              type="button"
              value="3PTS"
              onClick={(e) => setP1counter(3)}
            />

            <button id={styles.p1submit} type="submit">
              P1 Submit
            </button>
          </form>
          <br></br>
          <form onSubmit={P2scoreTotal}>
            <input
              id={styles.p2pts2}
              type="button"
              value="2PTS"
              onClick={(e) => setP2counter(2)}
            />
            <input
              id={styles.p2pts3}
              type="button"
              value="3PTS"
              onClick={(e) => setP2counter(3)}
            />

            <button id={styles.p2submit} type="submit">
              P2 Submit
            </button>
          </form>
        </div>
      )}
      <br></br>
    </div>
  );
}
