export const getTopTracks = (token) => {
  return fetch("https://api.spotify.com/v1/me/top/tracks?limit=5", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    });
};
