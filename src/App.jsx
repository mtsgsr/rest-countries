import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Loading from "./components/Loading";

const Main = React.lazy(() => import("./pages/Main"));
const Country = React.lazy(() => import("./pages/Country"));

function App() {
  const [country, setCountry] = React.useState([]);

  return (
    <ThemeProvider>
      <Router>
        <React.Suspense fallback={<Loading height="100vh" />}>
          <Routes>
            <Route path="/" element={<Main setCountry={setCountry} />} />
            <Route
              path="country/:id"
              element={<Country country={country} setCountry={setCountry} />}
            />
          </Routes>
        </React.Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
