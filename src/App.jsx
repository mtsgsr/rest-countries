import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Main from "./pages/Main";
import Country from "./pages/Country";

function App() {
  const [country, setCountry] = React.useState([]);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main setCountry={setCountry} />} />
          <Route path="country/:id" element={<Country country={country} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
