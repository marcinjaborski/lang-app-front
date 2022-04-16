import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import EditorPanel from "./components/EditorPanel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<EditorPanel />} />
          <Route path="/editor/:id" element={<EditorPanel />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
