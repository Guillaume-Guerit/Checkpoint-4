/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Limits from "./pages/Limits";
import LimitsDetails from "./pages/LimitsDetails";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import "bulma/css/bulma.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/limits" element={<Limits />} />
          <Route path="/limit/:id" element={<LimitsDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
