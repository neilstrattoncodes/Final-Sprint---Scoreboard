import React from "react";
import { useState } from "react";
import styles from "../styles/darts.module.css";

export default function DartScores() {
  const [p1total, setP1total] = useState(0); // for total P1 score
  const [p2total, setP2total] = useState(0); // for total P2 score
  const [p1dart1, setP1dart1] = useState(0); // P1 first dart
  const [p1dart2, setP1dart2] = useState(0); // P1 second dart
  const [p1dart3, setP1dart3] = useState(0); // P1 third dart
  const [p2dart1, setP2dart1] = useState(0); // P2 first dart
  const [p2dart2, setP2dart2] = useState(0); // P2 second dart
  const [p2dart3, setP2dart3] = useState(0); // P2 third dart
  const [p1array, setP1Array] = useState([]); // P1 Array for previous scores
  const [p2array, setP2Array] = useState([]); // P2 Array for previous scores
  const [p1name, setP1Name] = useState("Enter Player 1's Name"); // Player 1 name set
  const [p2name, setP2Name] = useState("Enter Player 2's Name"); // Player 2 name set

  const ScoreReset = () => {
    //score reset to 0
    setP1total(0);
    setP2total(0);
    setP1Array([]);
    setP2Array([]);
  };

  const ShowP1Array = p1array.map((score) => {
    // Player 1 array for dart round scores
    return <li>{score}</li>;
  });

  const ShowP2Array = p2array.map((score) => {
    // Plater 2 array for dart round scores
    return <li>{score}</li>;
  });

  const Score101 = () => {
    //score set to 101
    setP1total(Number(101));
    setP2total(Number(101));
    setP1Array([]);
    setP2Array([]);
  };

  const Score301 = () => {
    //score set to 301
    setP1total(Number(301));
    setP2total(Number(301));
    setP1Array([]);
    setP2Array([]);
  };

  const Score501 = () => {
    //score set to 501
    setP1total(Number(501));
    setP2total(Number(501));
    setP1Array([]);
    setP2Array([]);
  };

  const Score701 = () => {
    //score set to 701
    setP1total(Number(701));
    setP2total(Number(701));
    setP1Array([]);
    setP2Array([]);
  };

  const Score1001 = () => {
    //score set to 1001
    setP1total(Number(1001));
    setP2total(Number(1001));
    setP1Array([]);
    setP2Array([]);
  };

  const P1addDartTotal = (e) => {
    //add player 1 total darts and deduct from total score
    e.preventDefault();
    const score = Number(p1dart1) + Number(p1dart2) + Number(p1dart3);
    if (p1total - score >= 2) {
      setP1total(p1total - score);
      setP1Array([...p1array, score]);
    } else p1total = p1total;
    setP1dart1(0);
    setP1dart2(0);
    setP1dart3(0);
  };

  const P2addDartTotal = (e) => {
    //add player 2 total darts and deduct from total score
    e.preventDefault();
    const score = Number(p2dart1) + Number(p2dart2) + Number(p2dart3);
    if (p2total - score > 2) {
      setP2total(p2total - score);
      setP2Array([...p2array, score]);
    } else p2total = p2total;
    setP2dart1(0);
    setP2dart2(0);
    setP2dart3(0);
  };

  return (
    <div id={styles.background}>
      <div id={styles.scoreboard}>Darts Scoreboard</div>
      <br></br>
      <div id={styles.p1scoreboard}>
        {p1name} score is {p1total} points
      </div>
      <br></br>
      <div id={styles.p2scoreboard}>
        {p2name} score is {p2total} points
      </div>
      <div id={styles.background}>
        <form onSubmit={P1addDartTotal}>
          <input
            id={styles.p1dart1} //P1 Dart # 1
            type="number"
            message="Dart #1"
            value={p1dart1}
            max="60"
            min="0"
            step="1"
            placeholder="enter {p1score} score"
            onChange={(e) => setP1dart1(e.target.value)}
          />
          <input
            id={styles.p1dart2} //P1 Dart # 2
            type="number"
            value={p1dart2}
            placeholder="enter {p2score} score"
            max="60"
            min="0"
            step="1"
            onChange={(e) => setP1dart2(e.target.value)}
          />
          <input
            id={styles.p1dart3} //P1 Dart #3
            type="number"
            value={p1dart3}
            placeholder="enter {p2score} score"
            max="60"
            min="0"
            step="1"
            onChange={(e) => setP1dart3(e.target.value)}
          />
          <button id={styles.p1submit} type="submit">
            Player 1 Darts
          </button>
        </form>
      </div>
      <br></br>
      <form onSubmit={P2addDartTotal}>
        {styles.p1darts}
        <input
          id={styles.p2dart1} //P2 Dart #1
          label="Dart1"
          type="number"
          value={p2dart1}
          max="60"
          min="0"
          step="1"
          placeholder="Dart1"
          onChange={(e) => setP2dart1(e.target.value)}
        />
        <input
          id={styles.p2dart2} //P2 Dart #2
          type="number"
          value={p2dart2}
          placeholder="Dart2"
          max="60"
          min="0"
          step="1"
          onChange={(e) => setP2dart2(e.target.value)}
        />
        <input
          id={styles.p2dart3} //P2 Dart #3
          type="number"
          value={p2dart3}
          placeholder="enter {p2score} score"
          max="60"
          min="0"
          step="1"
          onChange={(e) => setP2dart3(e.target.value)}
        />

        <button id={styles.p2submit} type="submit">
          Player 2 Darts
        </button>
      </form>
      <div id={styles.gametype}>
        Game Type
        <button id={styles.gametype101} onClick={() => Score101()}>
          101
        </button>
        <button id={styles.gametype301} onClick={() => Score301()}>
          301
        </button>
        <button id={styles.gametype501} onClick={() => Score501()}>
          501
        </button>
        <button id={styles.gametype701} onClick={() => Score701()}>
          701
        </button>
        <button id={styles.gametype1001} onClick={() => Score1001()}>
          1001
        </button>
      </div>
      <br></br>
      <button id={styles.reset} onClick={() => ScoreReset()}>
        Clear Scores
      </button>
      <br></br>
      <br></br>
      <input
        id={styles.p1name} //P1 Name enter
        type="text"
        placeholder="enter Player1 Name"
        onChange={(e) => setP1Name(e.target.value)}
      />
      <br></br>
      <input
        id={styles.p2name} //P2 Name enter
        type="text"
        placeholder="enter Player2 Name"
        onChange={(e) => setP2Name(e.target.value)}
      />
      <br></br>
      <h2>
        <div id={styles.p1prevscore}>
          {p1name} previous scores are : <br></br>
          {ShowP1Array} <br></br>
        </div>
        <div id={styles.p2prevscore}>
          {p2name} previous scores are : {ShowP2Array}
        </div>
        <br></br>
      </h2>
    </div>
  );
}
