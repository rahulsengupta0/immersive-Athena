// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import AboutUs from "./aboutus";
import AtheaFeatures from "./AtheaFeatures";


function App() {
  return (

    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/features" element={<AtheaFeatures/>}/>
      {/* You can add more routes here in the future */}
    </Routes>
  );
}

export default App;
