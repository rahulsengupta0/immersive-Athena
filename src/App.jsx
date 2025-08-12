// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      {/* You can add more routes here in the future */}
    </Routes>
  );
}

export default App;
