import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import { useState } from "react";
import { TermContext } from "./context/termContext";

export default function App() {
  const [term, setTerm] = useState("");
  const [loading, isLoading] = useState(true);
  return (
    <TermContext.Provider value={{ term, setTerm, loading, isLoading }}>
      <Router>
        <div className="App">
          <Routes>
            <Route
              exact
              path="/"
              element={<Home fetchGallery={(term) => setTerm(term)} />}
            />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </Router>
    </TermContext.Provider>
  );
}
