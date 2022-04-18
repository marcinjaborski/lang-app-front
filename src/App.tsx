import React, { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import EditorPanel from "./components/EditorPanel";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [loadingApp, setLoadingApp] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const UserContext = createContext({});

  useEffect(() => {
    setLoggedIn(true);
    setLoadingApp(false);
  }, []);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editor" element={<EditorPanel />} />
            <Route path="/editor/:id" element={<EditorPanel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
