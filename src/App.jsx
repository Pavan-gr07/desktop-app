import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import ZoneLayout from "./pages/ZoneLayout";
import Monitoring from "./pages/Monitoring";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/zone" element={<ZoneLayout />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
