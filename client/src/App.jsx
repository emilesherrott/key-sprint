import React from "react";
import { Routes, Route } from "react-router-dom";

import { Nav } from "./layouts";
import * as Pages from "./pages";

import "./App.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="/solo" element={<Pages.SoloPage />} />
        <Route path="/challenge" element={<Pages.ChallengePage />} />
      </Route>
    </Routes>
  );
};

export default App