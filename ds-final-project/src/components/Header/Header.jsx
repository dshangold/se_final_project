import { useState } from "react";
import "./Header.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    closeLogin();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    closeRegister();
  };

  const CLIENT_ID = "cb18dd8395394c5c85fa5dd807ff5fd9";
  const REDIRECT_URI = "http://localhost:3000/callback";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPES = ["user-top-read"];

  const handleSpotifyLogin = () => {
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join(
      "%20"
    )}`;
  };

  const handleSignUpClick = () => {
    window.open("https://www.spotify.com/signup", "_blank");
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">SPOTIFY TOP 10</h1>
        <div className="header__auth">
          <button className="header__button" onClick={handleSpotifyLogin}>
            Log In
          </button>
          <button
            className="header__button header__button--signup"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </div>
      </div>
      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeLogin}
        onSubmit={handleLoginSubmit}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={closeRegister}
        onSubmit={handleRegisterSubmit}
      />
    </header>
  );
}

export default Header;
