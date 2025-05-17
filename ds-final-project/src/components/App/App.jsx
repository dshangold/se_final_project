import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("spotify_user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("spotify_user");
    if (storedUser && !user) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile setUser={setUser} />} />
          <Route path="/callback" element={<Profile setUser={setUser} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
