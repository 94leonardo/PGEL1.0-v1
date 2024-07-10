import { useEffect } from "react";
import EventCard from "../components/EventCard.jsx";
import { useEventoContext } from "../context/EventoContextprov";
function EventosList() {
  const { eventos, loadEvento } = useEventoContext();

  useEffect(() => {
    loadEvento();
  }, []);

  function renderMain() {
    if (eventos.length === 0) return <h2> no hay eventos</h2>;

    return eventos.map((event) => (
      <EventCard event={event} key={event.id_even} />
    ));
  }

  return (
    <div>
      <h1>Eventos</h1>
      {renderMain()}
    </div>
  );
}

export default EventosList;
