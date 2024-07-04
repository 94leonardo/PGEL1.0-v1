import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";
import NotFoundpage from "./pages/NotFoundpage";
import Nabar from './components/Navbar.jsx';

function App() {
  return (
  <>
    <Nabar/>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundpage/>} />
    </Routes>
  </>
  );
}

export default App;
