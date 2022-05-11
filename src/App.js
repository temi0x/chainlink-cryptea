import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/Home";
import Signup from "./pages/signup";
import Dash from './pages/dashboard';
import Notfound from "./pages/error/404";
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dash />}/>
          <Route path="*" element={<Notfound /> }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;