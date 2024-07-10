import axios from "axios";

//metodo para trae el arreiglo de eventos
export const getEventosRequest = async () => {
  try {
    const result = await axios.get("http://localhost:4000/eventos");
    return result.data;
  } catch (error) {
    return res.status(500).send({
      status: "success",
      message: "Error al crear usuario",
      error: error.message,
    });
  }
};

//metodo para evento registro un  por medio frontend

export const EventoRegistro = async (creat_event) => {
  try {
    const result = await axios.post(
      "http://localhost:4000/crear_evento",
      creat_event
    );
    return res.status(201).send({
      status: "success",
      message: "Evento creado exitosamente",
      result,
    });
  } catch (error) {
    return res.status(500).send({
      status: "success",
      message: "Error al crear usuario",
      error: error.message,
    });
  }
};

//metodo para eleimnar un evento por medio frontend

export const deleteEventosRequest = async (id_even) => {
  try {
    const result = await axios.delete(
      `http://localhost:4000/delete_evento/${id_even}`
    );
    return res.status(201).send({
      status: "success",
      message: "Evento eliminado exitosamente",
      result,
    });
  } catch (error) {
    return res.status(500).send({
      status: "success",
      message: "Error al eliminar el  evento",
      error: error.message,
    });
  }
};

export default EventoRegistro;
