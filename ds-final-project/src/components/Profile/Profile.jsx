import React, { useEffect, useState } from "react";
import "./Profile.css";
import { getAccessToken, getTopTracks, getUserProfile } from "../../utils/api";

export default function Profile({ setUser }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    const storedToken = localStorage.getItem("spotify_access_token");
    const storedTracks = localStorage.getItem("spotify_top_tracks");

    if (storedToken && storedTracks) {
      setTracks(JSON.parse(storedTracks));
      getUserProfile(storedToken)
        .then((profile) => {
          localStorage.setItem("spotify_user", JSON.stringify(profile));
          setUser(profile);
        })
        .catch(console.error);
    } else if (storedToken) {
      getUserProfile(storedToken)
        .then((profile) => {
          localStorage.setItem("spotify_user", JSON.stringify(profile));
          setUser(profile);
        })
        .catch(console.error);

      getTopTracks(storedToken)
        .then((tracks) => {
          localStorage.setItem("spotify_top_tracks", JSON.stringify(tracks));
          setTracks(tracks);
        })
        .catch(console.error);
    } else if (code) {
      getAccessToken(code)
        .then((token) => {
          window.history.replaceState(null, null, "/callback");
          return Promise.all([getUserProfile(token), getTopTracks(token)]);
        })
        .then(([profile, tracks]) => {
          localStorage.setItem("spotify_user", JSON.stringify(profile));
          localStorage.setItem("spotify_top_tracks", JSON.stringify(tracks));
          setUser(profile);
          setTracks(tracks);
        })
        .catch((err) => {
          console.error("Error during auth flow:", err);
        });
    }
  }, [setUser]);

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
