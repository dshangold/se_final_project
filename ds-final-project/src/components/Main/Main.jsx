import React from "react";
import "./Main.css";
import headphones from "../../assets/headphones.png";

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Welcome to SpotifyProfile App</h1>
      <img className="main__image" src={headphones} alt="mainpage logo" />
      <p className="main__subtitle">Login to see your top 5 Spotify tracks!</p>
    </main>
  );
}

export default Main;
