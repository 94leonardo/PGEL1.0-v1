import { deleteEventosRequest } from "../api/evento.api";
import * as React from "react";
import { useEventoContext } from "../context/EventoContextprov"; 


function EventCard({ event }) {

  const {handleDelete} = useEventoContext();
  
  return (
    <div>
      <h2>{event.nombre_even}</h2>
      <p>{event.detalles}</p>
      <span>{event.done === 1 ? "Realizado ✔️" : "Pendiente ❌"}</span>
      <span>{event.fechaEvento}</span>
      <button>Editar</button>
      <button onClick={() => handleDelete(event.id_even)}>Eliminar</button>
    </div>
  );
}
export default EventCard;
