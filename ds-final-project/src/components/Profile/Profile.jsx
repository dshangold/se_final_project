import React, { useEffect, useState } from "react";
import "./Profile.css";
import { getAccessToken, getTopTracks } from "../../utils/api";

export default function Profile() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    console.log("Authorization code:", code);
    if (code) {
      getAccessToken(code)
        .then((token) => {
          window.history.replaceState(null, null, "/callback");
          console.log("Access Token:", token);
          return getTopTracks(token);
        })
        .then((items) => {
          console.log("Top Tracks:", items);
          setTracks(items);
          console.log("Tracks in state:", tracks);
        })
        .catch((err) => {
          console.error("Error fetching tracks:", err);
        });
    }
  }, []);

  return (
    <div className="profile-page">
      <div className="profile">
        <h2 className="profile__heading">Your Top 5 Tracks</h2>
        <ul className="profile__track-list">
          {tracks.map((track) => (
            <li key={track.id} className="profile__track-item">
              <div className="profile__track-name">{track.name}</div>
              <div className="profile__track-artist">
                {track.artists[0].name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
