import { useEffect, useState } from "react";

function Profile() {
  const [topTracks, setTopTracks] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let _token = window.localStorage.getItem("token");

    if (!_token && hash) {
      _token = hash
        .substring(1)
        .split("&")
        .find((item) => item.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", _token);
    }

    setToken(_token);

    if (_token) {
      fetch("https://api.spotify.com/v1/me/top/tracks?limit=5", {
        headers: {
          Authorization: `Bearer ${_token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setTopTracks(data.items || []);
        })
        .catch((err) => console.error("Failed to fetch tracks", err));
    }
  }, []);

  return (
    <div className="profile">
      <h2>Your Top 5 Tracks</h2>
      <ul className="profile__tracks">
        {topTracks.map((track) => (
          <li key={track.id} className="profile__track">
            <p>
              {track.name} by{" "}
              {track.artists.map((artist) => artist.name).join(", ")}
            </p>
            <audio controls src={track.preview_url}></audio>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
