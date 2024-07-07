import axios from "axios";
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

export default EventoRegistro;
