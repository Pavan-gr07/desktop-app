import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import "./App.css";
import ZoneLayout from "./pages/ZoneLayout";
import Monitoring from "./pages/Monitoring";
import Home from "./pages/Home";
import { theme } from "../theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/zone" element={<ZoneLayout />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
