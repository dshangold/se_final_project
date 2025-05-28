import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";
import { handleLoginClick, handleSignUpClick } from "../../utils/api";

function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("spotify_user");
    localStorage.removeItem("spotify_top_tracks");
    localStorage.removeItem("spotify_access_token");
    localStorage.removeItem("spotify_code_verifier");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav">
          <Link to="/" className="header__button">
            Home
          </Link>
          <h1 className="header__logo">VibeCheck</h1>
        </div>

        {user ? (
          <div className="header__profile">
            <Link to="/profile" className="header__profile-link">
              <img
                className="header__avatar"
                src={user.images?.[0]?.url}
                alt={user.display_name}
              />
              <span className="header__username">{user.display_name}</span>
            </Link>
            <button
              className="header__button header__button--logout"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        ) : (
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
        )}
      </div>
    </header>
  );
}

export default Header;
