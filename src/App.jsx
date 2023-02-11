import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home, Movie } from "./pages";

function App() {

  const [results, setResults] = useState({});

  return (
    <Routes>
      <Route exact path="/" element={<Home results={results} setResults={setResults}/>} />
      <Route exact path="/movie/:movie-name" element={<Movie results={results} />} />
    </Routes>
  );
}

export default App;
