import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>About Us</p>
        <p>Missions</p>
        <p>Live feeds</p>
        <Link to="/donate">Donate</Link>
      </header>
    </div>
  );
};

export default Home;
