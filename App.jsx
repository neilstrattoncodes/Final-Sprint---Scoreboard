import logo from "./logo.svg";
import "./App.css";
import BasketBall from "./components/BasketBall";
import CornHole from "./components/CornHole";
import Darts from "./components/Darts";
import AuthForm from "./components/AuthForm";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import { useState } from "react";
import styles from "./styles/app.module.css";

function App() {
  const [islogin, setIsLogin] = useState(false);
  const [username, setUserName] = useState(false);

  return (
    <div className="App">
      <Router>
        <header className="Nav-header">
          <h1>Neils Scoreboard App</h1>
          {username ? <h2>{username}</h2> : null}
        </header>
        <br />
        <Link to="/basketball" id={styles.basketball}>
          Basketball Score Board
        </Link>
        <br></br>
        <Link to="/cornhole" id={styles.cornhole}>
          Corn Hole Score Board
        </Link>{" "}
        <br />
        <Link to="/darts" id={styles.darts}>
          Darts Score Board
        </Link>
        <br></br>
        <Link to="/authform" id={styles.auth}>
          Auth Form
        </Link>
        <Routes>
          {islogin ? (
            <Route path="/" element={<Welcome />} />
          ) : (
            <Route
              path="/"
              element={
                <AuthForm
                  islogin={islogin}
                  setIsLogin={setIsLogin}
                  setUserName={setUserName}
                />
              }
            />
          )}

          <Route path="/basketball" element={<BasketBall />} />
          <Route path="/cornhole" element={<CornHole />} />
          <Route path="/darts" element={<Darts />} />
          <Route path="/authform" element={<AuthForm />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
