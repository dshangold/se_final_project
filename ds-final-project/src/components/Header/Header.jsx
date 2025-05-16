import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { handleLoginClick, handleSignUpClick } from "../../utils/api";

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

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav">
          <Link to="/" className="header__button header__button--home">
            Home
          </Link>
          <h1 className="header__logo">SPOTIFY TOP 5</h1>
        </div>
        <div className="header__auth">
          <button className="header__button" onClick={handleLoginClick}>
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
