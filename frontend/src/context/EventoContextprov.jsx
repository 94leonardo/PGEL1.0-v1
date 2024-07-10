import { createContext, useContext, useState } from "react";
import {
  getEventosRequest,
  deleteEventosRequest,
  EventoRegistro,
} from "../api/evento.api";
import { EventoContext } from "./EventoContext";

export const useEventoContext = () => {
  const context = useContext(EventoContext);
  if (!context) {
    throw new Error(
      "useEventoContext must be used within an EventoContextProvider"
    );
  }
  return context;
};

//agrupa
export const EventoContextProvider = ({ children }) => {
  const [eventos, setEventos] = useState([]);
  async function loadEvento() {
    try {
      const response = await getEventosRequest();
      setEventos(response.result);
    } catch (error) {
      setError("Error al cargar eventos");
      console.error(error);
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await deleteEventosRequest(id);
      setEventos(eventos.filter((evento) => evento.id_even !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createEvent = async (evento) => {
    try {
      await EventoRegistro(evento);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EventoContext.Provider
      value={{
        eventos,
        setEventos,
        loadEvento,
        handleDelete,

        createEvent,
      }}
    >
      {children}
    </EventoContext.Provider>
  );
};
