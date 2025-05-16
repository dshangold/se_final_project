import { generateRandomString, generateCodeChallenge } from "./pkce";

export const CLIENT_ID = "cb18dd8395394c5c85fa5dd807ff5fd9";
export const REDIRECT_URI = "http://127.0.0.1:3000/callback";
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const SCOPES = ["user-top-read", "user-read-private"];

export const handleLoginClick = async () => {
  const codeVerifier = generateRandomString(128);
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  localStorage.setItem("spotify_code_verifier", codeVerifier);

  const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(
    SCOPES.join(" ")
  )}&code_challenge_method=S256&code_challenge=${codeChallenge}`;

  window.location.href = authUrl;
};

export const handleSignUpClick = () => {
  window.open("https://www.spotify.com/signup", "_blank");
};

export const getAccessToken = async (code) => {
  const codeVerifier = localStorage.getItem("spotify_code_verifier");

  const params = new URLSearchParams();
  params.append("client_id", CLIENT_ID);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", REDIRECT_URI);
  params.append("code_verifier", codeVerifier);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const data = await response.json();
  if (data.access_token) {
    return data.access_token;
  } else {
    throw new Error("Failed to retrieve access token: " + JSON.stringify(data));
  }
};

export const getTopTracks = async (token) => {
  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?limit=5",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error("Error fetching tracks: " + JSON.stringify(data));
  }

  return data.items;
};
