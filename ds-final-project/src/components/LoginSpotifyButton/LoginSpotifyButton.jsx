const CLIENT_ID = "cb18dd8395394c5c85fa5dd807ff5fd9";
const REDIRECT_URI = "http://localhost:3000/profile"; // Redirect to your Profile page after login
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPE = "user-top-read";

function LoginSpotifyButton() {
  const handleLogin = () => {
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
  };

  return (
    <button className="login-button" onClick={handleLogin}>
      Connect with Spotify
    </button>
  );
}

export default LoginSpotifyButton;
