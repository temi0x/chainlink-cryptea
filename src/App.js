import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/Home";
import Signup from "./pages/auth/signup";
import Dash from './pages/dashboard';
import Notfound from "./pages/error/404";
import LoginForm from "./pages/auth/login";
import { useMoralis } from "react-moralis";
const App = () => {
    const { isAuthenticated } = useMoralis();

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={!isAuthenticated ? <Dash /> : <Navigate to="/"/>}/>
          <Route path="*" element={<Notfound /> }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;