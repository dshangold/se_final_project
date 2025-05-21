import React from "react";
import "./Main.css";
import gkmc from "../../assets/gkmc.png";
import grdt from "../../assets/grdt.png";
import illmatic from "../../assets/illmatic.png";
import juicewrld from "../../assets/juicewrld.png";
import readytodie from "../../assets/readytodie.png";
import slimshadylp from "../../assets/slimshadylp.png";

function Main({ user }) {
  return (
    <main className="main">
      <h1 className="main__title">
        {user
          ? "More vibes coming soon..."
          : "Discover your Top 5 listened to tracks from your favorite artist!"}
      </h1>

      <div className="main__image-grid">
        <div className="main__image-wrapper">
          <img className="main__image" src={gkmc} alt="kendrick" />
          <div className="main__overlay">
            Kendrick Lamar – good kid, m.A.A.d city
          </div>
        </div>
        <div className="main__image-wrapper">
          <img className="main__image" src={slimshadylp} alt="eminem" />
          <div className="main__overlay">Eminem – Slim Shady LP</div>
        </div>
        <div className="main__image-wrapper">
          <img className="main__image" src={readytodie} alt="biggie" />
          <div className="main__overlay">Biggie – Ready to Die</div>
        </div>
        <div className="main__image-wrapper">
          <img className="main__image" src={grdt} alt="50cent" />
          <div className="main__overlay">50 Cent – Get Rich or Die Tryin'</div>
        </div>
        <div className="main__image-wrapper">
          <img className="main__image" src={illmatic} alt="nas" />
          <div className="main__overlay">Nas – Illmatic</div>
        </div>
        <div className="main__image-wrapper">
          <img className="main__image" src={juicewrld} alt="juicewrld" />
          <div className="main__overlay">
            Juice WRLD – Goodbye & Good Riddance
          </div>
        </div>
      </div>

      <p className="main__subtitle">
        {user
          ? "Check your profile to see your top 5 tracks!"
          : "Login to see your top 5 Spotify tracks!"}
      </p>
    </main>
  );
}

export default Main;
