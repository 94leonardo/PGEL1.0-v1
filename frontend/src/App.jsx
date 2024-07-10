import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";
import NotFoundpage from "./pages/NotFoundpage";
import Navbar from "./components/Navbar";
import EventoPage from "./pages/EventosPage";
import EventosList from "./pages/EventosList";
import { EventoContextProvider } from "./context/EventoContextprov";

function App() {
  return (
    <div>
      <EventoContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registro" element={<RegisterPage />} />
          <Route path="/crear_evento" element={<EventoPage />} />
          <Route path="/Listar_eventos" element={<EventosList />} />
          <Route path="*" element={<NotFoundpage />} />
        </Routes>
      </EventoContextProvider>
    </div>
  );
}

export default App;
