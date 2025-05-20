import React from "react";
import "./Main.css";
import headphones from "../../assets/headphones.png";

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">
        Discover your Top 5 listened to tracks from your favorite artist!
      </h1>

      <div className="main__image-grid">
        <img className="main__image" src={headphones} alt="Headphones" />
        <img className="main__image" src={headphones} alt="Headphones" />
        <img className="main__image" src={headphones} alt="Headphones" />
        <img className="main__image" src={headphones} alt="Headphones" />
        <img className="main__image" src={headphones} alt="Headphones" />
        <img className="main__image" src={headphones} alt="Headphones" />
      </div>

      <p className="main__subtitle">Login to see your top 5 Spotify tracks!</p>
    </main>
  );
}

export default Main;
