import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LandingPage } from "../pages/LandingPage";
import { Pokemon } from "../pages/Pokemon";

export function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/pokemon' element={<Pokemon />} />
      </Routes>
    </Router>
  );
}
