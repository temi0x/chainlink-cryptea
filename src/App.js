import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Signup from "./pages/auth/signup";
import Dash from "./pages/dashboard";
import Loader from "./components/loader";
import Notfound from "./pages/error/404";
import LoginForm from "./pages/auth/login";
import { useMoralis } from "react-moralis";
const App = () => {
  const { isAuthenticated, isInitializing } = useMoralis();
  const [loading, uloading] = useState(true);
  useEffect(() => {
    if (isInitializing) {
      uloading(false);
    }
  }, [isInitializing]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loading ? <Loader /> : <Home />} />
        <Route path="/about" element={loading ? <Loader /> : <About />} />
        <Route path="/signup" element={loading ? <Loader /> : <Signup />} />
        <Route path="/login" element={loading ? <Loader /> : <LoginForm />} />
        <Route
          path="/dashboard"
          element={
            loading ? (
              <Loader />
            ) : isAuthenticated ? (
              <Dash />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="*" element={loading ? <Loader /> : <Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
